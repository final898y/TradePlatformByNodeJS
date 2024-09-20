use("TradePlatform");

db.Product.drop();

db.createCollection("Product", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "Product",
            required: ["_id", "UID", "Name", "Price", "ProductStatus", "TotalQTY", "SaleQTY", "PhotoURL"],
            properties: {
                _id:
                {
                    bsonType: "string",
                    description: "商品唯一ID"
                },
                UID:
                {
                    bsonType: "string",
                    description: "用戶唯一ID"
                },
                Name:
                {
                    bsonType: "string",
                    description: "商品名稱"
                },
                Price: {
                    bsonType: "int",
                    minimum: 0,
                    description: "商品價格"
                },
                ProductStatus:
                {
                    bsonType: "int",
                    enum: [0, 1, 2, 3],
                    description: "商品狀態：0為下架(預設)，1為上架，2為完售，3為停售"
                },
                TotalQTY: {
                    bsonType: "int",
                    minimum: 0,
                    description: "商品總數"
                },
                SaleQTY: {
                    bsonType: "int",
                    minimum: 0,
                    description: "商品售出數"
                },
                PhotoURL: {
                    bsonType: "string",
                    pattern: "^(http|https)://",
                    description: "商品圖片網址"
                }
            }
        }
    }
});