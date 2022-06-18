import Monster from './Monster.js';
import util from 'util';
import multer from 'multer';
const upload = multer();

class MonsterController {
  async getAll(req, res) {
    try {
      const monsters = await Monster.find();
      res.json(monsters);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async create(req, res) {
    try {
      const { name, health } = req.body;
      const monster = await Monster.create({ name, health });
      res.json(monster);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async update(req, res) {
    try {
      const id = req.query.id;
      const target = await Monster.findById(id);
      if (target == null) {
        res.json('Нет такого монстра');
        return;
      }
      if (target.health == 1) {
        const deletedMonster = await Monster.findByIdAndDelete(id);
        res.json('monster is dead');
      } else {
        const updatedMonster = await Monster.findByIdAndUpdate(id, {
          health: `${target.health - 1}`
        });
        res.json(`monsters hp = ${target.health - 1}`);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new MonsterController();
