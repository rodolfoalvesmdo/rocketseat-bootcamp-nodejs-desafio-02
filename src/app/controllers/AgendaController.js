const { User, Appointment } = require('../models')
const { Op } = require('sequelize')
const moment = require('moment')

class AgendaController {
  async list (req, res) {
    const appointments = await Appointment.findAll({
      include: [{ model: User, as: 'user' }],
      where: {
        provider_id: req.session.user.id,
        date: {
          [Op.between]: [
            moment()
              .startOf('day')
              .format(),
            moment()
              .endOf('day')
              .format()
          ]
        }
      }
    })

    res.render('agenda/index', { appointments })
  }
}

module.exports = new AgendaController()
