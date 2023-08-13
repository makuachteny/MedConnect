'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      AppointmentId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Appointment_Date: {
        type: Sequelize.DATE
      },
      Appointment_Time: {
        type: Sequelize.STRING
      },
      Patient_ID: {
        type: Sequelize.INTEGER
      },
      Doctor_ID: {
        type: Sequelize.INTEGER
      },
      Clinic_Number: {
        type: Sequelize.INTEGER
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};