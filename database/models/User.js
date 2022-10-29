module.exports = (sequelize, dataTypes) => {
    const Usuario = sequelize.define(
        "Usuarios",
        {
            idUser: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nombre: {
                type: dataTypes.STRING,
            },
            status: {
                type: dataTypes.INTEGER,
            },
        },
        {
            tableName: "Usuarios",
            timestamps: true,
        }
    );

    return Usuario;
};
