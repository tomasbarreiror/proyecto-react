const products = [
    {
        id: '1',
        nombre: "Lenovo IdeaPad 3i 6ta Gen (15.6', Intel)", 
        precio: 499.00,
        stock: 4, 
        img: "img/nb_lenovo.webp",
        categoria: "notebook"
    },
    
    {
        id: '2',
        nombre: "Dell Inspiron 3511 5ta Gen (15.6', Intel)",
        precio: 556.00, 
        stock: 6,
        img: "img/nb_dell.webp",
        categoria:"notebook"
    },
    
    {
        id: '3',
        nombre: "Asus Vivobook Pro 16 (16', Intel)",    
        precio: 1299.00,
        stock: 5,
        img: "img/nb_asus.webp",
        categoria: "notebook"
    },
    
    {
        id: '4',
        nombre: "AMD Ryzen 5 5600",    
        precio: 145.00,
        stock: 15,
        img: "img/ryzen5_2da.webp",
        categoria: "procesador-amd"
    },
    
    {
        id: '5',
        nombre: "Intel Core I5 12400f",    
        precio: 149.00,
        stock: 15,
        img: "img/i5_12th.webp",
        categoria: "procesador-intel"
    },
    
    {
        id: '6',
        nombre: "AMD Ryzen 5 5600X",  
        precio: 157.00,
        stock: 12,
        img: "img/ryzen5_2da.webp", 
        categoria:  "procesador-amd"
    },
    
    {
        id: '7',
        nombre: "Intel Core I5 12-600k", 
        precio: 178.00,
        stock:  11,
        img:  "img/i5_12th.webp",
        categoria:  "procesador-intel"
    },
    
    {
        id: '8',
        nombre: "AMD Ryzen 7 5700X",  
        precio: 191.00,
        stock:  7,
        img: "img/ryzen7_3ra.webp",
        categoria:  "procesador-amd"
    },
    
    {
        id: '9',  
        nombre: "AMD Ryzen 7 5800X",  
        precio: 210,
        stock: 6,
        img:  "img/ryzen7_3ra.webp",
        categoria:  "procesador-amd"
    },
    
    {
        id: '10',
        nombre: "Intel Core I7 12-600K",  
        precio: 274.00,
        stock:  6,
        img: "img/i7_12th.webp",
        categoria:  "procesador-intel"
    },
    
    {
        id: '11', 
        nombre: "Intel Core I7 12-700KF", 
        precio: 288.00,
        stock: 5,
        img: "img/i7_12th.webp", 
        categoria: "procesador-intel"
    },
    
    {
        id: '12',
        nombre: "AMD Ryzen 9 5900X", 
        precio: 319.00,
        stock:  4,
        img: "img/ryzen9_3ra.webp",
        categoria:  "procesador-amd"
    },
    
    {
        id: '13',
        nombre: "Intel Core I9 12-900K",  
        precio: 320.00,
        stock:  3,
        img: "img/i9_12th.webp", 
        categoria: "procesador-intel"
    },
    
    {
        id: '14',
        nombre: "Intel Core I9 12-900KS",   
        precio: 349.00,
        stock: 2, 
        img: "img/i9_12th.webp",
        categoria: "procesador-intel"
    },

    {
        id: '15',
        nombre: "AMD Ryzen 9 5950X",  
        precio: 448.00,
        stock: 3,
        img: "img/ryzen9_3ra.webp",
        categoria:  "procesador-amd"
    },

    {
        id: '16',
        nombre: "Mother Asus Prime A520M-K",   
        precio: 65.00,
        stock: 12,
        img: "img/a520.webp",
        categoria: "mother-amd"
    },
    
    {
        id: '17',
        nombre: "Mother Asus Prime H410M-E",   
        precio: 66.00,
        stock:  8,
        img: "img/h410.webp",
        categoria: "mother-intel"
    },
    
    {
        id: '18',   
        nombre: "Mother Gigabyte B450 DS3H",
        precio: 70.00,
        stock: 9,
        img:  "img/b450.webp",
        categoria:  "mother-amd"
    },
    
    {
        id: '19',
        nombre: "Mother Gigabyte A620M S2H", 
        precio: 80.00,
        stock: 15,
        img: "img/a620.webp",
        categoria: "mother-amd"
    },
    
    {
        id: '20',
        nombre: "Mother Gigabyte H510M H",  
        precio: 83.00, 
        stock: 13,
        img:  "img/h510.webp",
        categoria: "mother-intel"
    },
    
    {
        id: '21',
        nombre: "Mother Asrock H610M-HDV", 
        precio: 103.00,
        stock: 10,
        img: "img/h610.webp", 
        categoria: "mother-intel"
    },
    
    {
        id: '22',
        nombre: "Mother Gigabyte B550 Aorus Elite V2",   
        precio: 120.00,
        stock: 6,
        img: "img/b550.webp",
        categoria: "mother-amd"
    },
    
    {
        id: '23',
        nombre: "Mother Gigabyte B660 Gaming X DDR4",
        precio: 129.00,
        stock:  5,
        img: "img/b660.webp",
        categoria: "mother-intel"
    },
    
    {
        id: '24',
        nombre: "Mother MSI Mag B760 Tomahawk",
        precio: 169.00,
        stock: 4, 
        img: "img/b760.webp",
        categoria: "mother-intel"
    },
    
    {
        id: '25',
        nombre: "Mother Gigabyte B650 Aorus Elite AX",   
        precio: 199.00,
        stock:  3,
        img: "img/b650.webp",
        categoria: "mother-amd"
    },
    
    {
        id: '26',
        nombre: "Mother Asus Prime X670-P AuraSync",   
        precio: 259.00,
        stock:  3,
        img: "img/x670.webp",
        categoria: "mother-amd"
    },
    
    {
        id: '27',
        nombre: "Mother Asus Prime Z790-P AuraSync",
        precio:  269.00,
        stock: 4,
        img: "img/z790.webp",
        categoria: "mother-intel"
    },
    
    {
        id: '28',
        nombre: "MSI Armor AMD Radeon 580 8gb",   
        precio: 139.00, 
        stock: 14,
        img: "img/rx580.webp",
        categoria: "placas"
    },
    
    {
        id: '29',
        nombre: "MSI Gaming X GTX 1650 4gb",  
        precio: 154.00,
        stock: 13,
        img: "img/gtx1650.webp",
        categoria:  "placas"
    },
    
    {
        id: '30',
        nombre: "Gigabyte GTX 1660 Ti 6gb",    
        precio: 227,
        stock: 17,
        img: "img/gtx1660ti.webp",
        categoria: "placas"
    },
    
    {
        id: '31',
        nombre: "MSI Gaming X AMD Radeon RX 6650 XT 8gb", 
        precio: 249.00,
        stock: 10,
        img: "img/rx6650xt.webp", 
        categoria:  "placas"
    },
    
    {
        id: '32',
        nombre: "Gigabyte AMD Radeon RX 7600 8gb",
        precio: 269.00,
        stock: 9,
        img: "img/rx7600.webp",
        categoria: "placas"
    },
    
    {
        id: '33',
        nombre: "MSI Gaming Trio AMD Radeon RX 6800 16gb",
        precio: 429.00,
        stock: 9,
        img: "img/rx6800.webp",
        categoria: "placas"
    },
    
    {
        id: '34',
        nombre: "Asus TUF Gaming RTX 3070 Ti 8gb",    
        precio: 531.00,
        stock: 8, 
        img: "img/rtx3070ti.webp",
        categoria: "placas"
    },
    
    {
        id: '35',
        nombre: "Asus TUF Gaming AMD RX 7900 XT 20gb",   
        precio: 999.00,
        stock:  5,
        img: "img/rx7900xt.webp",
        categoria: "placas"
    },
    
    {
        id: '36',
        nombre: "MSI Gaming Trio X RTX 4080 16gb",  
        precio:  1171.00,
        stock: 5,
        img: "img/rtx4080.webp",
        categoria:  "placas"
    },
    
    {
        id: '37',
        nombre: "Asus ROG Strix Gaming RTX 4090 24gb",  
        precio: 1989.00,
        stock:  3, 
        img: "img/rtx4090.webp",
        categoria: "placas"
    },
    
    {
        id: '38',
        nombre: "Redragon Kumara K552 RGB - Switches Blue",
        precio: 50.00,
        stock: 10,
        img: "img/kumara.webp",
        categoria: "teclado"
    },
    
    {
        id: '39',
        nombre: "Hyperx Alloy FPS Pro - Switches Red",   
        precio: 65.00,
        stock: 12,
        img:  "img/alloy_fps.webp",
        categoria: "teclado"
    },
    
    {
        id: '40',
        nombre: "Hyperx Alloy Origins 60% - Lineal Red ",
        precio:  81.00, 
        stock: 12, 
        img: "img/alloy_origins.webp",
        categoria:  "teclado"
    },
    
    {
        id: '41',
        nombre: "Logitech G PRO - GX Blue Clicky ", 
        precio: 99.00,
        stock: 11,
        img: "img/t_gpro.webp",
        categoria: "teclado"
    },
    
    {
        id: '42',
        nombre: "Razer Huntsman Tournament Edition - Optical Red", 
        precio: 109.00, 
        stock: 10,
        img:  "img/huntsman.webp",
        categoria:  "teclado"
    },
    
    {
        id: '43',
        nombre: "Redragon Cobra M711",    
        precio: 17.00,
        stock: 20,
        img: "img/cobra.webp",
        categoria: "mouse"
    },
    
    {
        id: '44',
        nombre: "Logitech G203 - Black",  
        precio: 27.00,
        stock:  19,
        img:  "img/g203.webp",
        categoria: "mouse"
    },
    
    {
        id: '45',
        nombre: "Razer Viper Mini",   
        precio: 49.00,
        stock: 15,
        img: "img/viper.webp",
        categoria:  "mouse"
    },
    
    {
        id: '46',
        nombre: "Glorious Model O - Black", 
        precio: 56.00,
        stock: 10,
        img: "img/modelO.webp",
        categoria: "mouse"
    },
    
    {
        id: '47',
        nombre: "Logitech G Pro X Wireless",    
        precio: 99.00,
        stock: 5,
        img: "img/gpro_wireless.webp",
        categoria: "mouse"
    },
    
    {
        id: '48',
        nombre: "Redragon Zeus H710 - Black",    
        precio: 45.00,
        stock: 16,
        img: "img/zeus.webp",
        categoria: "auriculares"
    },
    
    {
        id: '49',
        nombre: "Razer Kraken - Black",   
        precio: 54.00,
        stock: 11,
        img:  "img/kraken.webp",
        categoria: "auriculares"
    },
    
    {
        id: '50',
        nombre: "Logitech G Series G533 Wireless", 
        precio: 103.00,
        stock: 8, 
        img:  "img/g553.webp",
        categoria:  "auriculares"
    },
    
    {
        id: '51',
        nombre: "HyperX Cloud Flight Wireless",
        precio: 139.00,
        stock:  8, 
        img: "img/cloudf.webp", 
        categoria: "auriculares"
    },
    
    {
        id: '52',
        nombre:"Logitech Astro A50 Wireless",    
        precio: 275.00,
        stock: 6,
        img: "img/a50.webp",
        categoria: "auriculares"
    },
    
    {
        id: '53',
        nombre: "Redragon Mousepad Kunlun K006",   
        precio: 18.00,
        stock:  19,
        img: "img/kunlun.webp",
        categoria: "pad"
    },
    
    {
        id: '54',
        nombre: "Hyperx Fury S Large",    
        precio: 20.00,
        stock: 15,
        img: "img/pad_hyperx.webp",
        categoria: "pad"
    },
    
    {
        id: '55',
        nombre: "The Mousepad Companmy - Strata Liquid", 
        precio: 35.00,
        stock: 17,
        img: "img/mousepadcompany.webp",
        categoria: "pad"
    },
    
    {
        id: '56',
        nombre: "Logitech G640 C9 Edition",
        precio: 50.00,
        stock:  9, 
        img: "img/pad_c9.webp",
        categoria: "pad"
    },
    
    {
        id: '57',
        nombre: "Glorious Mousepad XXXL",
        precio: 55.00,
        stock: 7,
        img: "img/gloriousxxxl.webp",
        categoria:  "pad"
    },
    
    {
        id: '58',
        nombre: "Microfono Fifine K730",  
        precio: 30.00,
        stock: 12, 
        img:  "img/k730.webp",
        categoria: "cam-mic"
    },
    
    {
        id: '59',
        nombre: "Camara Webcam Logitech C920 Pro S",
        precio: 65.00,
        stock: 10,
        img:  "img/c920.webp", 
        categoria: "cam-mic"
    },
    
    {
        id: '60',
        nombre: "Microfono Hyperx Quadcast - Red",
        precio: 147.00,
        stock: 12,
        img: "img/quadcast.webp",
        categoria: "cam-mic"
    },
    
    {
        id: '61',
        nombre: "Camara Webcam Logitech Brio",
        precio:  191.00,
        stock: 12, 
        img: "img/brio.webp",
        categoria: "cam-mic"
    },
    
    {
        id: '62',
        nombre: "Microfono Shure SM7B",
        precio:  399.00, 
        stock: 12,
        img: "img/shure.webp", 
        categoria: "cam-mic"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        resolve(products)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        })
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        const filteredProducts = products.filter((prod) => prod.categoria === categoryId);
        resolve(filteredProducts)
    })
}
