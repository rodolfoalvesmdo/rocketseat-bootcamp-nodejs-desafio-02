module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    user_id: DataTypes.INTEGER,
    provider_id: DataTypes.INTEGER,
    date: DataTypes.DATE
  })

  Appointment.associate = models => {
    Appointment.belongsTo(models.User, { as: 'user', foreingKey: 'user_id' })
    Appointment.belongsTo(models.User, {
      as: 'provider',
      foreingKey: 'provider_id'
    })
  }

  return Appointment
}
