module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product',{
            name: DataTypes.STRING,
            price: DataTypes.INTEGER,
            category: DataTypes.STRING,
            description: DataTypes.TEXT,
            //image: DataTypes.
        });

    return Product;
}
