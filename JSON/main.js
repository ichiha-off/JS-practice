const data = '[{"id":1,"name":"中村 享介"},{"id":2,"name":"高津戸 壮"},{"id":3,"name":"小山田 晃浩"},{"id":4,"name":"外村 和仁"},{"id":5,"name":"外村 奈津子"},{"id":6,"name":"德田 和規"},{"id":7,"name":"山田 順久"},{"id":8,"name":"小原 司"},{"id":9,"name":"山田 敬美"},{"id":10,"name":"坂巻 翔大郎"},{"id":999,"name":"中島 直博"}]';

// const json = JSON.parse(data);
// function staff(num) {
//   for (let staff of json) {
//     if (staff.id === num) {
//       console.log(staff.name);
//     }
//   }
// }

// const staff = function (id) {
//   const called = JSON.parse(data).some(function (person) {
//     if (person.id === id) {
//      console.log(person.name);
//      return true;
//     }
//   });
//   if (!called) {
//     console.log(null);
//   }
// }

// function staff(id) {
//   const reg = new RegExp('"id":'+id+',"name":"([^"]*)"',"i"); // i = 大文字小文字を区別しない
//   const match = data.match(reg);
//   console.log(match ? match[1] : null);
// };

// const mapById = JSON.parse(data).reduce(function (map, item) {
//   console.log(map[item.id])
//   map[item.id] = item;
//   return map;
// }, {});

// function staff(id) {
//   return console.log(mapById[id] ? mapById[id].name : null);
// }

function staff(id) {
  var person = JSON.parse(data).filter(function(v){
    return v.id === id
  })[0];

  return console.log(person ? person.name : null);
}

staff(1);
staff(56);
staff(10);
staff(999);