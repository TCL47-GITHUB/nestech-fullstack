        // Ép kiểu tự động
        let a = "5" + 1; // "51" (chuỗi)
        let b = "5" - 1; // 4 (số)
        
        // Ép kiểu thủ công
        let strNumber = "42";
        let number = Number(strNumber); // Chuyển chuỗi thành số
        console.log(number); // 42
        
        let num = 123;
        let str = String(num); // Chuyển số thành chuỗi
        console.log(str); // "123"
        
        let value = 0;
        let boolValue = Boolean(value); // Chuyển số thành boolean
        console.log(boolValue); // false
        
        let strInt = "56px";
        let intValue = parseInt(strInt, 10); // Chuyển chuỗi thành số nguyên
        console.log(intValue); // 56
        
        let strFloat = "45.67abc";
        let floatValue = parseFloat(strFloat); // Chuyển chuỗi thành số thực
        console.log(floatValue); // 45.67