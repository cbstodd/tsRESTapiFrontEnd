import data = require('monthly_data.json');


export interface Month {
    month: HouseData[];
}

export default interface HouseData extends Month {
    purchase: number;
    reference: number;
}


export class GetHouseData {f

    getData = (dataType: any): null | object => {
        if (!dataType) {
            console.error('cbsERROR: There is no data being returned.');
            return null;
        } else {
            return dataType;
        }
    };
}


const allLabels: GetHouseData = new GetHouseData();

allLabels.getData(json.data.se);
