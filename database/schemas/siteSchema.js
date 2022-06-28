export const SitesScheme = {
    name: "Sites",
    properties:{
        _id:"string",
        name:'string',
        inventario:'Inventario[]',
        list:"List[]",
        dePara:'DePara[]',
        equipamento:'string',
        type:'string'
    },
    primaryKey:'_id'
}

export const InventarioScheme = {
    name: "Inventario",
    properties:{
        id:"float",
        modelo:'string',
        pn: 'string',
        desc: 'string',
        sap: 'int',
        numSerie: 'string',
        imgNumSerie: 'Image?',
        numBPSGP: 'string?',
        imgNumBPSGP: 'Image?',
        imgMain: 'Image?',
        sfpEquip: 'string?'
    },
}


export const ListScheme  = {
    name: 'List',
    properties:{       
        id:'float',
        title: 'string',
        img:'Image?',
    }
}


export const ImageScheme = {
    name: "Image",
    properties:{
        
        width: 'float',
        height: 'float',
        b64:'string',
    }
}

export const DeParaScheme = {
    name: 'DePara',
    properties:{
        de:'string',
        para:'string'
    }
}