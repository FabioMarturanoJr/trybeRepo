const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const MsgZeroMana = 'Não possui mana suficiente';

const verificaMana = () => mage.mana > 14;

const mkDamege =(max, min) => Math.floor(Math.random() * (max - min) + min );

const dragonDamage = (strength) => mkDamege(strength, 15);
const warriorDamage = (strength, weaponDmg) => mkDamege((strength * weaponDmg), strength);
const mageDamege = () => ({
  damege : verificaMana() ? mkDamege((mage.intelligence * 2), mage.intelligence) : MsgZeroMana,
  manaSpent: verificaMana() ? 15 : 0,
});



