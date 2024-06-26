let datos = {
    usuario:[{
    id: 1,
    email: "marcelogallardo@gmail.com",
    usuario: "muñeco912",
    contraseña: "912",
    fecha_nacimiento: 22/12/1999,
    documento: 24532467,
    foto: "/images/users/gallardo.webp",
    },
    {
        id: 2,
        email: "borja@gmail.com",
        usuario: "borja m.a",
        contraseña: "colombia123",
        fecha_nacimiento: 30/9/1988,
        documento: 45342251,
        foto: "/images/users/borja.png",
        },
    {
            id: 3,
            email: "enzo@gmail.com",
            usuario: "enzo.diazzz",
            contraseña: "rivercapr32",
            fecha_nacimiento: 11/11/2002,
            documento: 37653341,
            foto: "/images/users/enzodiaz.png",
    },
            {
                id: 4,
                email: "nacho@gmail.com",
                usuario: "nachoman",
                contraseña: "nachito",
                fecha_nacimiento: 21/3/1989,
                documento: 30824453,
                foto: "/images/users/nacho.png",
                },
                {
                    id: 5,
                    email: "facucolidio@gmail.com",
                    usuario: "facucolidio",
                    contraseña: "facundo123",
                    fecha_nacimiento: 11/10/2001,
                    documento: 40931125,
                    foto: "/images/users/colidio.png",
                    },
],



    productos:[
        {
        id: 1 ,
        nombre: "Volkswagen Golf GTI",
        descripcion: "Golf GTI 2021 30.000km",
        foto: "/images/products/Golf_GTI.jpeg",
        comentarios: [
            {
                nombre: "Enzo",
                comentario: "Muy bueno",
                imagen_perfil: "/images/users/enzodiaz.png",
                id: 3
            },
            {
                nombre: "borja",
                comentario: "Muy malo",
                imagen_perfil: "/images/users/borja.png",
                id: 2
            },
            {
                nombre: "nacho",
                comentario: "Alto auto",
                imagen_perfil: "/images/users/nacho.png",
                id: 4
            }]
        },
        
        {
            id: 2,
            nombre: "Porsche 911",
            descripcion: "911 Carrera S 2022 10.000km",
            foto: "/images/products/porsche911.webp",
            comentarios: [
                {
                    nombre: "Enzo",
                    comentario: "Me encanta este auto",
                    imagen_perfil: "/images/users/enzodiaz.png",
                    id: 3
                },
                {
                    nombre: "borja",
                    comentario: "Una belleza",
                    imagen_perfil: "/images/users/borja.png",
                    id: 2
                },
                {
                    nombre: "nacho",
                    comentario: "Excelente elección",
                    imagen_perfil: "/images/users/nacho.png",
                    id :4
                },
                {
                    nombre: "Colidio",
                    comentario: "Una belleza",
                    imagen_perfil: "/images/users/colidio.png",
                    id: 5
                }
            ]
        },
        {
            id: 3,
            nombre: "Ford Mustang GT",
            descripcion: "Mustang GT 2023 20.000km",
            foto: "/images/products/mustagng_gt.jpeg",
            comentarios: [
                {
                    nombre: "Enzo",
                    comentario: "Potencia",
                    imagen_perfil: "/images/users/enzodiaz.png",
                    id: 3
                },
                {
                    nombre: "borja",
                    comentario: "tremendo",
                    imagen_perfil: "/images/users/borja.png",
                    id: 2
                },
                {
                    nombre: "nacho",
                    comentario: "Un sueño",
                    imagen_perfil: "/images/users/nacho.png",
                    id: 4
                }
            ]
        },
        {
            id: 4,
            nombre: "Chevrolet Camaro SS",
            descripcion: "Camaro SS 2022 15.000km",
            foto: "/images/products/camaro_ss.jpeg",
            comentarios: [
                {
                    nombre: "Enzo",
                    comentario: "impresionante",
                    imagen_perfil: "/images/users/enzodiaz.png",
                    id: 3
                },
                {
                    nombre: "borja",
                    comentario: "Clásico",
                    imagen_perfil: "/images/users/borja.png",
                    id: 2
                },
                {
                    nombre: "nacho",
                    comentario: "Máquina",
                    imagen_perfil: "/images/users/nacho.png",
                    id: 4
                }
            ]
        },
        {
            id: 5,
            nombre: "BMW M3",
            descripcion: "M3 Competition 2021 12.000km",
            foto: "/images/products/bmw.webp",
            comentarios: [
                {
                    nombre: "Enzo",
                    comentario: "Eleganciaa",
                    imagen_perfil: "/images/users/enzodiaz.png",
                    id: 3
                },
                {
                    nombre: "borja",
                    comentario: "BMW siempre",
                    imagen_perfil: "/images/users/borja.png",
                    id: 2
                },
                {
                    nombre: "nacho",
                    comentario: "Una bestia",
                    imagen_perfil: "/images/users/nacho.png",
                    id: 4
                }
            ]
        },
        {
            id: 6,
            nombre: "Audi R8",
            descripcion: "R8 V10 Plus 2022 8.000km",
            foto: "/images/products/audi_r8.jpg",
            comentarios: [
                {
                    nombre: "Enzo",
                    comentario: "Futurista",
                    imagen_perfil: "/images/users/enzodiaz.png",
                    id: 3
                },
                {
                    nombre: "borja",
                    comentario: "Mucho rendimiento",
                    imagen_perfil: "/images/users/borja.png",
                    id: 2
                },
                {
                    nombre: "nacho",
                    comentario: "Tremendo sonido de escape",
                    imagen_perfil: "/images/users/nacho.png",
                    id: 4
                }
            ]
        },
        {
            id: 7,
            nombre: "Mercedes-AMG GT",
            descripcion: "AMG GT R 2023 18.000km",
            foto: "/images/products/mercedes_gt.jpeg",
            comentarios: [
                {
                    nombre: "Enzo",
                    comentario: "Puro poder",
                    imagen_perfil: "/images/users/enzodiaz.png",
                    id: 3
                },
                {
                    nombre: "borja",
                    comentario: "Mercedes simplemente",
                    imagen_perfil: "/images/users/borja.png",
                    id: 2
                },
                {
                    nombre: "nacho",
                    comentario: "Flojo de arranque",
                    imagen_perfil: "/images/users/nacho.png",
                    id: 4
                }
            ]
        },
        {
            id: 8,
            nombre: "Ferrari 488 GTB",
            descripcion: "488 GTB 2022 5.000km",
            foto: "/images/products/ferrari.jpeg",
            comentarios: [
                {
                    nombre: "Enzo",
                    comentario: "El sueño italiano",
                    imagen_perfil: "/images/users/enzodiaz.png",
                    id: 3
                },
                {
                    nombre: "borja",
                    comentario: "Lento en curvas",
                    imagen_perfil: "/images/users/borja.png",
                    id: 2
                },
                {
                    nombre: "nacho",
                    comentario: "Mal diseño",
                    imagen_perfil: "/images/users/nacho.png",
                    id: 4
                }
            ]
        },
        {
            id: 9,
            nombre: "Lamborghini Huracán",
            descripcion: "Huracán EVO 2023 7.000km",
            foto: "/images/products/lambo.jpeg",
            comentarios: [
                {
                    nombre: "Enzo",
                    comentario: "Puro poder",
                    imagen_perfil: "/images/users/enzodiaz.png",
                    id: 3
                },
                {
                    nombre: "borja",
                    comentario: "Lamborghini es arteo",
                    imagen_perfil: "/images/users/borja.png",
                    id: 2
                },
                {
                    nombre: "nacho",
                    comentario: "Emocionantee",
                    imagen_perfil: "/images/users/nacho.png",
                    id: 4
                }
            ]
        },
        {
            id: 10,
            nombre: "McLaren 720S",
            descripcion: "720S Spider 2022 3.000km",
            foto: "/images/products/mclaren.jpeg",
            comentarios: [
                {
                    nombre: "Enzo",
                    comentario: "Flojo de papeles",
                    imagen_perfil: "/images/users/enzodiaz.png",
                    id: 3
                },
                {
                    nombre: "borja",
                    comentario: "Rendimiento",
                    imagen_perfil: "/images/users/borja.png",
                    id: 2
                },
                {
                    nombre: "nacho",
                    comentario: "Facil de manejar",
                    imagen_perfil: "/images/users/nacho.png",
                    id: 4
                }
            ]
        }
    ]
}

module.exports = datos;