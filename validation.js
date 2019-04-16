var fs = require("fs");
var contents = fs.readFileSync("out_goods.json");
var jsonContent = JSON.parse(contents);

var reg_PRICE_ACTION = new RegExp('[0-9].[0-9][0-9]');//выражение для проверки в поле PRICE_ACTION
var reg_SIZE = new RegExp('[0-9]');//выражение для проверки в поле SIZE
for(var key in jsonContent)
{

    /*---------SALE-----------*/
   
    if(jsonContent[key]["SALE"]==null)
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = SALE cant be NULL");
        
    }
    else
    {
        if(typeof(jsonContent[key]["SALE"])!="string")
        {
            console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = SALE must be string");
        }
        else if(jsonContent[key]["SALE"]=="")
        {
            console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = SALE cant be empty");
        }


    }

    /*---------BRAND-----------*/
    if(jsonContent[key]["BRAND"]==null)
    { console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = BRAND cant be NULL");}
    else if(typeof(jsonContent[key]["BRAND"])!="string")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = BRAND must be string");
    }
    else if(jsonContent[key]["BRAND"]=="")
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = BRAND cant be empty");
    }
    
       /*---------QTY-----------*/
     if(typeof(jsonContent[key]["QTY"])!="number"&&jsonContent[key]["QTY"]!=null)
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = QTY must be number");
    }
    else if(jsonContent[key]["QTY"]=="")
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = QTY cant be empty");
    }
    

    /*---------SEASON_UA-----------*/
     if(typeof(jsonContent[key]["SEASON_UA"])!="string"&&jsonContent[key]["SEASON_UA"]!=null)
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = SEASON_UA must be string");
    }
    else if(jsonContent[key]["SEASON_UA"]=="")
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = QSEASON_UA cant be empty");
    }
    
   /*---------VID_TOVARA_UA-----------*/
     if(typeof(jsonContent[key]["VID_TOVARA_UA"])!="string"&&jsonContent[key]["VID_TOVARA_UA"]!=null)
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = VID_TOVARA_UA must be string");
    }
    else if(jsonContent[key]["VID_TOVARA_UA"]=="")
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = VID_TOVARA_UA cant be empty");
    }
    
   /*---------VERX_UA-----------*/
     if(typeof(jsonContent[key]["VERX_UA"])!="string"&&jsonContent[key]["VERX_UA"]!=null)
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = VERX_UA must be string");
    }
    else if(jsonContent[key]["VERX_UA"]=="")
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = VERX_UA cant be empty");
    }
    
   /*---------PODKL_UA-----------*/
     if(typeof(jsonContent[key]["PODKL_UA"])!="string"&&jsonContent[key]["PODKL_UA"]!=null)
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = PODKL_UA must be string");
    }
    else if(jsonContent[key]["PODKL_UA"]=="")
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = PODKL_UA cant be empty");
    }
    
    /*---------STRANA_UA-----------*/
     if(typeof(jsonContent[key]["STRANA_UA"])!="string"&&jsonContent[key]["STRANA_UA"]!=null)
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = STRANA_UA must be string");
    }
    else if(jsonContent[key]["STRANA_UA"]=="")
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = STRANA_UA cant be empty");
    }
    
   /*---------STYLE_UA-----------*/
     if(typeof(jsonContent[key]["STYLE_UA"])!="string"&&jsonContent[key]["STYLE_UA"]!=null)
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = STYLE_UA must be string");
    }
    else if(jsonContent[key]["STYLE_UA"]=="")
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = STYLE_UA cant be empty");
    }
    
   /*---------CVET_UA-----------*/
     if(typeof(jsonContent[key]["CVET_UA"])!="string"&&jsonContent[key]["CVET_UA"]!=null)
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = CVET_UA must be string");
    }
    else if(jsonContent[key]["CVET_UA"]=="")
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = CVET_UA cant be empty");
    }
    
   /*---------DESCRIPTION_UA-----------*/
     if(typeof(jsonContent[key]["DESCRIPTION_UA"])!="string"&&jsonContent[key]["DESCRIPTION_UA"]!=null)
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = DESCRIPTION_UA must be string");
    }
    else if(jsonContent[key]["DESCRIPTION_UA"]=="")
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = DESCRIPTION_UA cant be empty");
    }
    
   /*---------TECHNOLOGY-----------*/
     if(typeof(jsonContent[key]["TECHNOLOGY"])!="string"&&jsonContent[key]["TECHNOLOGY"]!=null)
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = TECHNOLOGY must be string");
    }
    else if(jsonContent[key]["TECHNOLOGY"]=="")
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = TECHNOLOGY cant be empty");
    }
    
   /*---------PRICE_BASE-----------*/
     if(typeof(jsonContent[key]["PRICE_BASE"])!="string"&&jsonContent[key]["PRICE_BASE"]!=null)
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = PRICE_BASE must be string");
    }
    else if(jsonContent[key]["PRICE_BASE"]=="")
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = PRICE_BASE cant be empty");
    }
    
   /*---------PRICE_ACTION-----------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
     if(typeof(jsonContent[key]["PRICE_ACTION"])!="string"&&jsonContent[key]["PRICE_ACTION"]!=null)
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = PRICE_ACTION must be string");
    }
    else if(jsonContent[key]["PRICE_ACTION"]=="")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = PRICE_ACTION cant be empty");
    }
    else if(jsonContent[key]["PRICE_ACTION"]!=null)//если строка проверим формат регулярным выражением
    {
        if(reg_PRICE_ACTION.test(jsonContent[key]["PRICE_ACTION"])==false)
        {
            console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = PRICE_ACTION  must be number like 10.00");
        }
    }
 
   /*---------ACCESSORY-----------*/
     if(typeof(jsonContent[key]["ACCESSORY"])!="string"&&jsonContent[key]["ACCESSORY"]!=null)
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = ACCESSORY must be string");
    }
    else if(jsonContent[key]["ACCESSORY"]=="")
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = ACCESSORY cant be empty");
    }
    else if(jsonContent[key]["ACCESSORY"]!="Y"&&jsonContent[key]["ACCESSORY"]!="N")
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = ACCESSORY must be only 'Y'or'N'");
    }
    
   /*---------SORT-----------*/
     if(typeof(jsonContent[key]["SORT"])!="string"&&jsonContent[key]["SORT"]!=null)
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = SORT must be string");
    }
    else if(jsonContent[key]["SORT"]=="")
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = SORT cant be empty");
    }
    
   /*---------GENDER_UA-----------*/
     if(typeof(jsonContent[key]["GENDER_UA"])!="string"&&jsonContent[key]["GENDER_UA"]!=null)
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = GENDER_UA must be string");
    }
    else if(jsonContent[key]["GENDER_UA"]=="")
    {
        console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = GENDER_UA cant be empty");
    }
    
   /*---------SIZE-----------*/
   if(jsonContent[key]["SIZE"]==null)
     {
        console.log("Error!!! Ключ объекта ="+key+"; Поле с ошибкой = SIZE is null");
     }
    else if(Array.isArray(jsonContent[key]["SIZE"])==false)
    {
    console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = SIZE must be array");
    }
    else if(typeof(jsonContent[key]["SIZE"][0])!="string")
    {

    console.log("Error!!! Ключ объекта ="+key+"; Поле с ошибкой = SIZE. тип элементов должен быть строкой с числом");
    }
    else 
    {
        for(var i in jsonContent[key]["SIZE"])
        {
        if(reg_SIZE.test(jsonContent[key]["SIZE"][i])==false)
        {
        console.log("Error!!! Ключ объекта ="+key+"; Поле с ошибкой = SIZE. тип элементов должен быть строкой с числом");
        }
        }
    }
    



   /*---------PHOTO-----------*/
   if(jsonContent[key]["PHOTO"]==null)
     {
        console.log("Error!!! Ключ объекта ="+key+"; Поле с ошибкой = PHOTO is null");
     }
   else if(Array.isArray(jsonContent[key]["PHOTO"])=="false")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = PHOTO must be array");
    }
}

 
