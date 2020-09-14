const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const db = require('quick.db')



const client = new Discord.Client();
client.commands = new Discord.Collection();

const economy = fs.readdirSync('./commands/economy').filter(file => file.endsWith('.js'));

for (const file of economy) {
	const command = require(`./commands/economy/${file}`);
	client.commands.set(command.name, command);

}

const lol = fs.readdirSync('./commands/lol').filter(file => file.endsWith('.js'));

for (const file of lol) {
	const command = require(`./commands/lol/${file}`);
	client.commands.set(command.name, command);

}

const osu = fs.readdirSync('./commands/osu').filter(file => file.endsWith('.js'));

for (const file of osu) {
	const command = require(`./commands/osu/${file}`);
	client.commands.set(command.name, command);

}

const actions = fs.readdirSync('./commands/actions').filter(file => file.endsWith('.js'));

for (const file of actions) {
	const command = require(`./commands/actions/${file}`);
	client.commands.set(command.name, command);

}

const fun = fs.readdirSync('./commands/fun').filter(file => file.endsWith('.js'));

for (const file of fun) {
	const command = require(`./commands/fun/${file}`);
	client.commands.set(command.name, command);

}

const info = fs.readdirSync('./commands/info').filter(file => file.endsWith('.js'));

for (const file of info) {
	const command = require(`./commands/info/${file}`);
	client.commands.set(command.name, command);

}

const profile = fs.readdirSync('./commands/profile').filter(file => file.endsWith('.js'));

for (const file of profile) {
	const command = require(`./commands/profile/${file}`);
	client.commands.set(command.name, command);

}

const admin = fs.readdirSync('./commands/admin').filter(file => file.endsWith('.js'));

for (const file of admin) {
	const command = require(`./commands/admin/${file}`);
	client.commands.set(command.name, command);

}

const cooldowns = new Discord.Collection();

client.once('ready', () => {
	client.user.setActivity("e assistindo vocês sofrerem")
	console.log('Ready!');
});

fs.readdir('./events/', (err, files) => {
	if(err) return console.log(err)
	files.forEach(file => {
		if(!file.endsWith('.js')) return;
		const evt = require(`./events/${file}`)
		let evtName = file.split('.')[0];
		console.log(`Evento carregado: ${evtName}`)
		client.on(evtName, evt.bind(null, client))
	})
})

fs.readdir('./commands/actions/', (err, files) => {

	if(err) return console.log(err)
	files.forEach(file => {
		if(!file.endsWith('.js')) return;
		let props = require(`./commands/actions/${file}`)
		let cmdName = file.split('.')[0]
		console.log(`Pasta Actions: Carregou ${cmdName}`)
	})
})

fs.readdir('./commands/admin/', (err, files) => {

		if(err) return console.log(err)
		files.forEach(file => {
			if(!file.endsWith('.js')) return;
			let props = require(`./commands/admin/${file}`)
			let cmdName = file.split('.')[0]
			console.log(`Pasta Admin: Carregou ${cmdName}`)
	})
}) 

fs.readdir('./commands/economy/', (err, files) => {

	if(err) return console.log(err)
	files.forEach(file => {
		if(!file.endsWith('.js')) return;
		let props = require(`./commands/economy/${file}`)
		let cmdName = file.split('.')[0]
		console.log(`Pasta Economy: Carregou ${cmdName}`)
	})
})

fs.readdir('./commands/fun/', (err, files) => {

	if(err) return console.log(err)
	files.forEach(file => {
		if(!file.endsWith('.js')) return;
		let props = require(`./commands/fun/${file}`)
		let cmdName = file.split('.')[0]
		console.log(`Pasta Fun: Carregou ${cmdName}`)
	})
})

fs.readdir('./commands/info/', (err, files) => {

	if(err) return console.log(err)
	files.forEach(file => {
		if(!file.endsWith('.js')) return;
		let props = require(`./commands/info/${file}`)
		let cmdName = file.split('.')[0]
		console.log(`Pasta Info: Carregou ${cmdName}`)
	})
})

fs.readdir('./commands/lol/', (err, files) => {

	if(err) return console.log(err)
	files.forEach(file => {
		if(!file.endsWith('.js')) return;
		let props = require(`./commands/lol/${file}`)
		let cmdName = file.split('.')[0]
		console.log(`Pasta lol: Carregou ${cmdName}`)
	})
})

fs.readdir('./commands/osu/', (err, files) => {

	if(err) return console.log(err)
	files.forEach(file => {
		if(!file.endsWith('.js')) return;
		let props = require(`./commands/osu/${file}`)
		let cmdName = file.split('.')[0]
		console.log(`Pasta Osu: Carregou ${cmdName}`)
	})
})

fs.readdir('./commands/profile/', (err, files) => {

	if(err) return console.log(err)
	files.forEach(file => {
		if(!file.endsWith('.js')) return;
		let props = require(`./commands/profile/${file}`)
		let cmdName = file.split('.')[0]
		console.log(`Pasta Profile: Carregou ${cmdName}`)
	})
})

client.on('message', async message => {

	let prefix; // define balnk variable with any name you want
	let prefixes = await db.fetch(`prefix_${message.guild.id}`);
	if(prefixes == null) {
	  prefix = "$" // default prefix if no prefix set for this guild
	} else {
	  prefix = prefixes;
	}


	if (!message.content.startsWith(prefix) || message.author.bot) return;

	try{


	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `Você não me deu nenhum argumento!, ${message.author}!`;

		if (command.usage) {
			reply += `\nO jeito certo de usar seria: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 0) * 000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`Por favor espere ${timeLeft.toFixed(1)} segundos antes de usar o \`${command.name}\``).then(msg => msg.delete({timeout: 3000}))
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args, client);
	} catch (error) {
		message.reply('Erro!');
		}
			} catch(e) {

		}
	});

client.on('messageDelete', async (messageDelete) => {

	const canal = client.channels.cache.find(channel => channel.id === '754171057027678210')
	if(!canal) return;

	try {

	await Discord.Util.delayFor(900);
  
	const fetchedLogs = await messageDelete.guild.fetchAuditLogs({
	  limit: 6,
	  type: 'MESSAGE_DELETE'
	}).catch(() => ({
	  entries: []
	}));
  
	const auditEntry = fetchedLogs.entries.find(a =>
	  a.target.id === messageDelete.author.id &&
	  a.extra.channel.id === messageDelete.channel.id &&
	  Date.now() - a.createdTimestamp < 20000
	);
  
	const executor = auditEntry ? auditEntry.executor.tag : 'Ele/a mesmo';
	if (executor.id === client.user.id) return;
  
  
	const DeleteEmbed = new Discord.MessageEmbed()
	  .setTitle("mensagem deletada")
	  .setColor("#fc3c3c")
	  .addField("Autor", messageDelete.author.tag, true)
	  .addField("Deletado por", executor, true)
	  .addField("Canal", messageDelete.channel, true)
	  .addField("Mensagem", messageDelete.content, true)

	  canal.send(DeleteEmbed)

  } catch(e) {
  }
})

 client.on('messageUpdate', async (oldMessage, newMessage) => { 

   if(oldMessage === newMessage) return;
  try{


  let canal = client.channels.cache.find(channel => channel.id === '754171057027678210')

  let embed = new Discord.MessageEmbed()
  .setTitle("mensagem editada")
  .setColor("#fc3c3c")
  .setDescription(`${oldMessage.author.tag} editou uma mensagem em <#${oldMessage.channel.id}>`)
  .addField(`Mensagem nova`, newMessage.content, true)
  .addField(`Mensagem antiga`, oldMessage.content, true)

  if(!canal) return;
  canal.send(embed)
		} catch(e) {
	}
}) 

client.login(token);