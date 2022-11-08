// BACK-END

const productsDataBase =
        [
            {
                "id": 1,
                "nombre": "Blest IPA",
                "estilo": "Ipa",
                "tamaño": "355 ml",
                "ibu": "54 IBU",
                "alcohol": "6,5 %",
                "precio": "441,00",
                "descripcion": "Blest IPA es una cerveza de color ámbar, rojizo, aportado por las maltas caramelizadas. Cuya caracteristica principal se basa en un gran aroma cítrico y un instenso amargor proporcionado por el lúpulo, anto nacional como importado.",
                "imagen": "./img/cervezas/blestipa.png",
            },
            {
                "id": 2,
                "nombre": "Bavaria 8.6 Black",
                "estilo": "Negra",
                "tamaño": "500 ml",
                "ibu": "25 IBU",
                "alcohol": "7,9 %",
                "precio": "648,00",
                "descripcion": "Cerveza color oscura, con aroma a granos de cacao y café recién tostado. En su consumo se pueden degustar los sabores cálidos, dulces y amargos. Su final tiene notas a regaliz en esta cerveza robusta e intensa.",
                "imagen": "./img/cervezas/bavariablack.png",
            },
            {
                "id": 3,
                "nombre": "Blest Bock",
                "estilo": "Negra",
                "tamaño": "355 ml",
                "ibu": "19 IBU",
                "alcohol": "5,8 %",
                "precio": "432,00",
                "descripcion": "Cerveza de color oscuro gracias a las maltas tostadas. En el paladar podemos percibir notas de café y chocolate embebidas de una suavidad de carbonatación moderada.",
                "imagen": "./img/cervezas/blestbock.png",
            },
            {
                "id": 4,
                "nombre": "Cusqueña Dark",
                "estilo": "Negra",
                "tamaño": "330 ml",
                "ibu": "20 IBU",
                "alcohol": "5,6 %",
                "precio": "473,00",
                "descripcion": "Probá la cerveza peruana Cusqueña Dark.. La más preciada del Perú. Sabor delicado y color dorado. Su aroma proviene de su combinación 100% malta y lúpulo aromático.",
                "imagen": "./img/cervezas/cusqueñadark.png",
            },
            {
                "id": 5,
                "nombre": "Guinness Extra Stout",
                "estilo": "Negra",
                "tamaño": "473 ml",
                "ibu": "30 IBU",
                "alcohol": "5,0 %",
                "precio": "281,00",
                "descripcion": "Un balance equilibrado, con caracteres tostados y sutil afrutado de fermentación con aromas cálidos y tostados de café y caramelo. Una cerveza negra distintiva y con cuerpo, con una rica y cremosa espuma.",
                "imagen": "./img/cervezas/guinnessextrastout.png",
            },
            {
                "id": 6,
                "nombre": "Antares Scotch",
                "estilo": "Roja",
                "tamaño": "473 ml",
                "ibu": "18 IBU",
                "alcohol": "6,0 %",
                "precio": "367,00",
                "descripcion": "Escocia es tierra de cebada y la Scotch Ale lleva ese paisaje impregnado en su código genético. Rubí intenso. Seis grados de alcohol. Dulce y maltosa. La Antares más servida en nuestro Brewpub. Una fórmula a prueba del paso del tiempo.",
                "imagen": "./img/cervezas/antaresscotch.png",
            },
            {
                "id": 7,
                "nombre": "Bavaria 8.6 Red",
                "estilo": "Roja",
                "tamaño": "500 ml",
                "ibu": "18 IBU",
                "alcohol": "7,9 %",
                "precio": "606,00",
                "descripcion": "Esta cerveza roja oscura es dulce. Una cerveza con un aroma complejo de granos y caramelo y un final agridulce en el que persiste el alto porcentaje de alcohol.",
                "imagen": "./img/cervezas/bavaria8.6red.png",
            },
            {
                "id": 8,
                "nombre": "Cusqueña Red",
                "estilo": "Roja",
                "tamaño": "330 ml",
                "ibu": "25 IBU",
                "alcohol": "5,0 %",
                "precio": "514,00",
                "descripcion": "Cusqueña Red Lager es una edición especial creada para los paladares más exigentes, con un color rojizo-dorado, resultado de la combinación perfecta de maltas cuidadosamente seleccionadas y el proceso natural de tostar la cebada.",
                "imagen": "./img/cervezas/cusqueñared.png",
            },
            {
                "id": 9,
                "nombre": "Erdinger Dunker",
                "estilo": "Roja",
                "tamaño": "500 ml",
                "ibu": "14 IBU",
                "alcohol": "5,6 %",
                "precio": "964,00",
                "descripcion": "La Erdinger Weissbier Dunkel es una cerveza de trigo de color marrón oscuro de abundante espuma de color crema de duración media y de burbujas finas y suaves, con un 5,6% de alcohol en volumen, su aroma destaca por las notas a malta tostada.",
                "imagen": "./img/cervezas/erdingerdunkel.png",
            },

        ];

export default function getProductsFromDataBase() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsDataBase);
        }, 500);
    });
};

export function getSingleProductFromDataBase(idParams) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let productsRequested = productsDataBase.find(
                (product) => product.id === Number(idParams)
            )
            if (productsRequested !== undefined) {
                resolve(productsRequested)
            } else {
                reject (new Error ("El producto no existe"))
            }            
        }, 500);
    });
};

