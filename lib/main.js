'use strict';

var PREFIX = "*";
var COMMANDS = {
  "Info": [{
    name: "userinfo",
    usage: "[@mention] or [user ID]",
    desc: "Shows information about a user."
  }, {
    name: "serverinfo",
    desc: "Shows information about the server."
  }, {
    name: "botinfo",
    desc: "Shows information about the server."
  }, {
    name: "invite",
    desc: "Sends a direct message to the requester with information on how to add Lucky Bot to a server."
  }, {
    name: "trello",
    desc: "Provides a link to Lucky Bot's <a href=\"https://trello.com/b/0uytHSPL/lucky-bot\" target=\"_blank\">Trello</a> to view upcoming features."
  }, {
    name: "github",
    desc: "Provides a link to Lucky Bot's <a href=\"https://github.com/Ravexburn/LuckyBot\" target=\"_blank\">GitHub</a> page."
  }, {
    name: "issue",
    usage: "[message]",
    desc: "Allows the user to report an issue they are experiencing with Lucky Bot."
  }, {
    name: "suggestion",
    usage: "[message]",
    desc: "Allows the user to suggest a feature they would like to see on Lucky Bot."
  }],
  "Profile": [{
    name: "profile",
    usage: "[@mention] or [user ID]",
    desc: "Shows the profile of the user."
  }, {
    name: "ticket",
    desc: "Adds a ticket to your account. Can be used once every 6 hours."
  }, {
    name: "rep",
    usage: "[@mention] or [user ID]",
    desc: "Gives the user a reputation point. Can be used once every 12 hours."
  }],
  "Last FM": [{
    name: "lastfm",
    desc: "Shows basic account info."
  }, {
    name: "lastfm set",
    usage: "[username]",
    desc: "Saves lastfm username for future use."
  }, {
    name: "lastfm nowplaying",
    desc: "Shows the song currently playing."
  }, {
    name: "lastfm recent",
    desc: "Shows the most recent songs played."
  }, {
    name: "lastfm toptracks",
    usage: "[week|month|3-month|half-year|year]",
    desc: "Shows the top tracks of [period]."
  }, {
    name: "lastfm topartist",
    usage: "[week|month|3-month|half-year|year]",
    desc: "Shows the top artists of [period]."
  }, {
    name: "lastfm topalbums",
    usage: "[week|month|3-month|half-year|year]",
    desc: "Shows the top albums of [period]."
  }],
  "Notifications": [{
    name: "notify add",
    usage: "[keyword]",
    desc: "Adds a [keyword] to notify you about on the server."
  }, {
    name: "notify remove",
    usage: "[keyword]",
    desc: "Removes a [keyword] you were notified about on the server."
  }, {
    name: "notify list",
    desc: "Direct messages a list of keywords for the server."
  }, {
    name: "notify clear",
    desc: "Removes all keywords for the server."
  }, {
    name: "notify global add",
    usage: "[keyword]",
    desc: "Adds a [keyword] to notify you about on all servers."
  }, {
    name: "notify global remove",
    usage: "[keyword]",
    desc: "Removes a global [keyword]."
  }, {
    name: "notify global list",
    desc: "Direct messages a list of global keywords."
  }, {
    name: "notify global clear",
    desc: "Removes all global keywords you have."
  }, {
    name: "notify ignore channel",
    usage: "[#channel-name or channel ID]",
    desc: "Ignores all keyword triggers in the specified channel."
  }, {
    name: "notify ignore server",
    desc: "Ignores all global keyword triggers in the server."
  }],
  "Custom Commands": [{
    name: "command list",
    desc: "Direct messages a list of custom commands on the server."
  }, {
    name: "command add",
    usage: "[name] [command] ",
    desc: "Adds a custom command to the server."
  }, {
    name: "command remove",
    usage: "[name] [command] ",
    desc: "Removes a custom command on the server."
  }, {
    name: "command edit",
    usage: "[name] [command] ",
    desc: "Edits a custom command on the server."
  }],
  "Starboard": [{
    name: "starboard channel",
    usage: "[#channel-name or ID]",
    desc: "Sets the channel where the bot should place starred messages."
  }, {
    name: "starboard emoji",
    desc: "Prompts the user to react with the emoji the bot watches for to place messages on the board."
  }, {
    name: "starboard number",
    usage: "[number]",
    desc: "Sets the number of reactions required to place messages on the board."
  }],
  "Music": [{
    name: "*nowplaying",
    desc: "Shows the song that is currently playing"
  }, {
    name: "*play",
    usage: "[title|URL|subcommand]",
    desc: "Plays the provided song"
  }, {
    name: "*playlists",
    desc: "Shows the available playlists"
  }, {
    name: "*queue",
    usage: "[page number]",
    desc: "Shows the current queue or specified page number of queue"
  }, {
    name: "*remove",
    usage: "[position|all]",
    desc: "Removes a song from the queue"
  }, {
    name: "*search",
    usage: "[query]",
    desc: "Earches Youtube for a provided query"
  }, {
    name: "*scsearch",
    usage: "[query]",
    desc: "Searches Soundcloud for a provided query"
  }, {
    name: "*shuffle",
    desc: "Shuffles the queue"
  }, {
    name: "*skip",
    desc: "Initiates a vote to skip the current song"
  }, {
    name: "*forceskip",
    desc: "Skips the current song (DJ role required)"
  }, {
    name: "*pause",
    desc: "Pauses. duh. (DJ role required)"
  }, {
    name: "*repeat",
    usage: "[on|off]",
    desc: "Toggles re-adding music to the queue when it is empty"
  }, {
    name: "*skipto",
    usage: "[position]",
    desc: "Skips to the specified song (DJ role required)"
  }, {
    name: "*stop",
    desc: "Stops and clears the queue (DJ role required)"
  }, {
    name: "*volume",
    usage: "[0 - 150]",
    desc: "Sets volume or displays current volume if no extra argument is given (DJ role required)"
  }, {
    name: "*setdj",
    usage: "[rolename|none]",
    desc: "Sets the DJ role for certain music commands (Admin role required)"
  }, {
    name: "*settc",
    usage: "[channel-name|none]",
    desc: "Sets the text channel for music commands (Admin role required)"
  }, {
    name: "*setvc",
    usage: "[channel-name|none]",
    desc: "Sets the voice channel for playing music (Admin role required)"
  }],
  "Greeter": [{
    name: "greeter channel",
    usage: "[#channel-name or ID]",
    desc: "Sets the channel the bot should greeter new members in."
  }, {
    name: "greeter message",
    usage: "[message]",
    desc: "Sets the message the bot says when a new member joins. Adding {server} will display the server name, {user} will display the user's name and tag, and {mention} will mention the user."
  }],
  "Logging and Roles": [{
    name: "*start roles",
    usage: "[#channel-name or ID]",
    desc: "Sets the channel for the role system."
  }, {
    name: "*start logs",
    usage: "[#channel-name or ID]",
    desc: "Sets the channel for message logs."
  }, {
    name: "*start join",
    usage: "[#channel-name or ID]",
    desc: "Sets the channel for users joining and leaving (message cannot be changed through this command)."
  }],
  "Toggles": [{
    name: "toggle image",
    desc: "Changes between embed and non-embed for images in message logs."
  }, {
    name: "toggle logs",
    desc: "Turns message logs on and off."
  }, {
    name: "toggle greeter",
    desc: "Turns greeter message on and off."
  }, {
    name: "toggle roles",
    desc: "Turns roles channel on and off."
  }, {
    name: "toggle starboard",
    desc: "Turns starboard channel on and off."
  }],
  "Misc": [{
    name: "color",
    usage: "[hex code|random]",
    desc: "Returns an image of the color provided or a random color."
  }],
  "Mod Commands": [{
    name: "setprefix",
    usage: "[prefix]",
    desc: "Changes the prefix for Lucky Bot (Default prefix is *)."
  }, {
    name: "autorole",
    usage: "[rolename]",
    desc: "Sets a role to be added to a user when they join the server."
  }, {
    name: "ban",
    usage: "[@user or ID] [days] [reason]",
    desc: "Bans a user and removes the messages from [days] for [reason]. Days default is 0."
  }, {
    name: "kick  Kicks a user for [reason].",
    usage: "[@user or ID] [reason]",
    desc: ""
  }, {
    name: "say",
    usage: "[#channel-name] [message]",
    desc: "Sends a message through Lucky Bot to desired channel."
  }, {
    name: "prune",
    usage: "[number of messages]",
    desc: "Deletes [number of messages] as well as the command line."
  }]

  /**
   * Creates a HTML node element with given type,
   * text, and class.
   * 
   * @param {object} settings Element settings
   */
};function createElement(settings) {
  var baseElem = document.createElement(settings.element);
  if (settings.text) {
    var text = settings.text;
    if (settings.space) {
      text = settings.text + " ";
    }

    baseElem.innerHTML = text;
  }

  if (settings.className) {
    baseElem.className = settings.className;
  }

  return baseElem;
}

document.addEventListener('DOMContentLoaded', function () {
  var cmds = document.getElementById("cmds");

  for (var category in COMMANDS) {
    if (!COMMANDS.hasOwnProperty(category)) {
      continue;
    }

    cmds.appendChild(createElement({
      element: "h3",
      text: category
    }));

    for (var index in COMMANDS[category]) {
      var cmd = COMMANDS[category][index];
      var cmdElem = document.createElement("div");

      // command name
      cmdElem.appendChild(createElement({
        element: "span",
        text: "" + PREFIX + cmd.name,
        space: true,
        className: "has-text-info"
      }));

      // command usage
      if (cmd.usage) {
        cmdElem.appendChild(createElement({
          element: "span",
          text: cmd.usage,
          space: true,
          className: "has-text-warning"
        }));
      }

      cmdElem.appendChild(createElement({
        element: "br"
      }));

      // command description

      cmdElem.appendChild(createElement({
        element: "p",
        text: "└ " + cmd.desc,
        className: "indented"
      }));

      cmds.appendChild(cmdElem);
    }

    cmds.appendChild(createElement({
      element: "hr",
      className: "divider"
    }));
  }
});