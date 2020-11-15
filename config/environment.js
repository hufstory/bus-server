const environment = {
    development: {
        mysql: {
            username: 'root',
            password: 'mariadbpassword',
            database: 'hufsbus'
        },

        sequelize: {
            force: false
        }
    },

    test: {
        mysql: {
            username: 'root',
            password: 'mariadbpassword',
            database: 'hufsbus'
        },

        sequelize: {
            force: true
        }
    },

    production: {

    }
}

const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = environment[nodeEnv];