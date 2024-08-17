function stringOperations(input) {
    console.log('Original String:', input);

    // 1. Loại bỏ khoảng trắng ở đầu và cuối chuỗi
    const trimmedInput = input.trim();
    console.log('Trimmed:', trimmedInput);

    // 2. Chuyển đổi chuỗi thành chữ hoa và chữ thường
    const upperCaseInput = trimmedInput.toUpperCase();
    const lowerCaseInput = trimmedInput.toLowerCase();
    console.log('Upper Case:', upperCaseInput);
    console.log('Lower Case:', lowerCaseInput);

    // 3. Thay thế từ 'world' bằng 'everyone'
    const replacedString = upperCaseInput.replace('WORLD', 'EVERYONE');
    console.log('Replaced:', replacedString);

    // 4. Tách chuỗi thành mảng các từ
    const wordsArray = replacedString.split(' ');
    console.log('Words Array:', wordsArray);

    // 5. Nối mảng các từ thành chuỗi
    const joinedString = wordsArray.join(' ');
    console.log('Joined String:', joinedString);

    // 6. Tìm chỉ số của từ 'EVERYONE'
    const indexOfEveryone = replacedString.indexOf('EVERYONE');
    console.log('Index of "EVERYONE":', indexOfEveryone);

    // 7. Trích xuất phần của chuỗi từ chỉ số 7 đến chỉ số 14
    const substring = replacedString.substring(7, 14);
    console.log('Substring from index 7 to 14:', substring);

    // 8. Kiểm tra sự tồn tại của từ 'EVERYONE'
    const containsEveryone = replacedString.includes('EVERYONE');
    console.log('Contains "EVERYONE":', containsEveryone);

    // 9. Kiểm tra sự bắt đầu và kết thúc của chuỗi
    const startsWithHello = replacedString.startsWith('HELLO');
    const endsWithEveryone = replacedString.endsWith('EVERYONE!');
    console.log('Starts with "HELLO":', startsWithHello);
    console.log('Ends with "EVERYONE!":', endsWithEveryone);

    // 10. Chèn chuỗi 'BEAUTIFUL ' vào vị trí 7
    const insertStr = replacedString.slice(0, 7) + 'BEAUTIFUL ' + replacedString.slice(7);
    console.log('Inserted String:', insertStr);

    
}

// Gọi hàm với chuỗi ví dụ
const exampleString = '   Hello, world!   ';
stringOperations(exampleString);


// ten = 'nhut'
// console.log(ten.slice(0,1).toUpperCase()+ten.slice(1))

// const cauVan = 'nhut la abc, nhut la abc';

// const tuCanThem = 'Huynh';

// // Thay thế tất cả các lần xuất hiện của 'nhut' bằng 'nhut Huynh'
// // const cauVanMoi = cauVan.replaceAll('nhut', `nhut ${tuCanThem}`);
// const cauVanMoi = cauVan.replaceAll('nhut', 'nhut' + " Huynh");

// console.log(cauVanMoi); // Kết quả: nhut Huynh la abc, nhut Huynh la abc

// chuoi = 'xin chao cac'
// console.log(chuoi.substring(4, 7))

