

const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host:'ir.skyblock.uz',
  version: 1.17,
  // port: 57285,
  username: 'Sarvarbek_miner3'    // botti nikini yozasiz
 })
 
 let continue_digging = true; 

 
bot.once("spawn", () => {
  bot.chat("/login HardLoyBot ");    // /login *********    login yozasiz
})

 bot.on("spawn", () => {
   bot.chat("/is go");    //faqat /is sethome qisez yoqin
})

bot.on('chat', (username, message) => {
  if (username == 'SarvarbekUZB')
  if (message == 'botmine3') {
    continue_digging=true;
    dig()
  }
})

bot.on('chat', (username, message) => {
    if (username == 'Phantom_')
  if (message == 'botmine3') {      // dignmadur
    continue_digging=true;
    dig()  
  }
})

async function dig() {
  if(!continue_digging){return};
  if (!bot.heldItem || !bot.heldItem.name.includes('pickaxe')) {
    var pickaxe = bot.inventory.items().filter(i => i.name.includes('pickaxe'))[0]; 
  if (pickaxe) await bot.equip(pickaxe, 'hand')
  }
  var block = bot.blockAtCursor(4);
  if (!block) return setTimeout (function () { dig(); }, 100);
  await bot.dig(block, 'ignore')
  dig()
}
