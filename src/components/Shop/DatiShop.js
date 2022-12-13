const products = [
    {
        id: '1',
        title: 'Completo',
        img: 'https://static.nike.com/a/images/t_default/f9d75efa-ec0b-4bb5-b7d5-6b19ae97d0ef/felpa-con-cappuccio-e-zip-a-tutta-lunghezza-sportswear-tech-fleece-windrunner-7kK8vl.png',
        desc: 'Completo Nike Donna invernale, ottimo per attivita fisiche all aperto.',
        price: '40.00'
    },
    {
        id: '2',
        title: 'Giubbotto',
        img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4be7e974-c70a-4ed8-acdc-5fcb26f8cdf8/giacca-foderata-sportswear-windrunner-circa-50-WvMwnV.png',
        desc: 'Giubbotto Nike Uomo, ottimo per attivita fisiche, e conto la pioggia.',
        price: '99.99'
    },
    {
        id: '3',
        title: 'Scarpe',
        img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b05afb11-db22-461d-b94e-49bdc316b445/scarpa-da-running-su-strada-revolution-6-next-nature-FgfhgR.png',
        desc: 'Scarpe Nike Unisex, Ottime per attivita fisiche, e passeggiate.',
        price: '59.60'
    },
    {
        id: '4',
        title: 'Felpa',
        img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTmUfRfj00PcdtJ4Rw2gyTxAQjRhcM88wjGDGh7LJTH2oG9UyCpE9pB8V1ByeOClekHeOKPtuyKMvnQBrxIkQpgRvnRYDcKo8_xQT_wXoR2&usqp=CAE',
        desc: 'Felpa Nike Unisex, Adatta per ogni tipo di situazione',
        price: '92.80'
    },
    {
        id: '5',
        title: 'Pantaloni',
        img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTJL81K4p_JCfa6BxfIRUsIrF8nU3A4eJzMRG1PegoEnGb2_Z269YtQSmGPdh3MXKkHc-DRxOrbUdiuR9alZV_cRmU7SwID1hFxTmXQP3jOfBdrf6Jx1Ac_Ug&usqp=CAE',
        desc: 'Pantaloni Nike Unisex, Ottimo per attivita fisiche.',
        price: '64.99'
    },
    {
        id: '6',
        title: 'Cappuccio',
        img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTRgCQ1LHx7_qNV7fy7rarTAhfz1HloyMsmWthZxMa0g4mXV7ReA4hRk-LkMFemtG1juOUxHTbL62ab7XgJJZA81lHrS8UfzBR2xOEpKbBvY4rETyympF0Nrv0&usqp=CAE',
        desc: 'Cappuccio Donna Nike Invernale',
        price: '30.00'
    },
    {
        id: '7',
        title: 'Cappellino',
        img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTm4NiO8skAl7IXwQY6c_2BexY5Kz0cunPzSnCduRE6LGz1LsylZ-i9z0SwW8yqX99-FPxD7kTZbXeQc5IaPl4zylMrIAJuqGl9gg679j7T5V1jyqP1IgH43u4l-pYShw&usqp=CAE',
        desc: 'Cappellino Uomo Nike.',
        price: '17.55'
    },
    {
        id: '8',
        title: 'Scarpe AF1',
        img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcStCPspETM-YeFe6e-yZDKuRR5s59eZlyj2ZlXZf5EnPJ6fI6L_54nAtRjr9kjq2oL4rbFYBSNMI2DIXx_5YEOYmMY36nWs_NdksCHQAHQllGgkDtfuu0xVRdw&usqp=CAE',
        desc: 'Scarpe Nike Unisex, Ottime per attivita fisiche, e passeggiate.',
        price: '139.99'
    },
    {
        id: '9',
        title: 'Felpa',
        img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTeYkAhs18K8x2sNKsAX2EaB-taI2kk3ubz625V2y20VvZDjVLRahaWekDoNJpSSKG595y0SW2_qcfMhiUSNmdkJ5IpcVKHy6R69Qwl0m1jzQjn6vf0nbVj&usqp=CAE',
        desc: 'Felpa Nike Unisex, Sportiva.',
        price: '78.99'
    },
    {
        id: '10',
        title: 'Scarpe J4',
        img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTIKqmk_Z70_3NuS2A3jksbVmGAOtPYdbA76AL8w1B-IureCpP90zz0DMOrlfxTQWFQVbHOZQg2qGyhdCyZOc_w5FmGhttZhMSwk8g5i_uQFJqYH6GsNMmCzg&usqp=CAE',
        desc: 'Scarpe Nike Basket.',
        price: '120.00'
    }
];

function getProductDataTwo(id) {
    let productData = products.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export {products, getProductDataTwo};