const partitionHomeTableCells = document.querySelectorAll('.partition-home-table-cell');
const nameSpans = Array.from(partitionHomeTableCells).map(cell => cell.querySelector('.name span'));
const names = nameSpans.map(span => span.textContent);
const resultList = [];
for (const name of names) {
    const url = `https://r6s.huijiwiki.com/wiki/${name}`;
    console.log(url);
    const response = await fetch(url);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    let position = doc.querySelector('.operator-position').textContent;
    if(position == '进攻方') {
        position = 'atk'
    } else {
        position = 'def'
    }
    let speedStr = doc.querySelector('.speedindicator').textContent;
    let speed = speedStr.split('●').length - 1
    let armorStr = doc.querySelector('.armorindicator').textContent;
    let armor = armorStr.split('●').length - 1
    let team = ''
    let troop = ''
    //基础信息
    const trList = doc.querySelectorAll('.infobox-operator tr')
    for(const tr of trList) {
        const th = tr.querySelector('th');
        const thStr = (th!=null)?th.textContent:'';
        if(thStr=='编队') {
            let teamTd = tr.querySelectorAll('td a')
            if(teamTd.length>1) {
                team = teamTd[1].textContent;
            } else {
                team = tr.querySelector('td').textContent;
            }
            continue;
        } else if (thStr=='机构' || thStr=='小队编制') {
            let troopTd = tr.querySelectorAll('td a');
            if(troopTd.length>1) {
                troop = troopTd[1].textContent.replace(/\n/g,"");
            } else {
                troop = tr.querySelector('td').textContent;
            }
            continue;
        } else {
            continue;
        }
    }
    //武器装备
    const tables = doc.querySelectorAll('.wikitable')
    var equipmentsTable
    for(let table of tables) {
        let thead = table.querySelector('th')
        if(thead!=undefined && thead.textContent == '装备')  {
            equipmentsTable = table
            break;
        }
    }
    var equipments = equipmentsTable.querySelectorAll('tr')
    //武器
    let weaponLis = equipments[1].querySelectorAll('td')[1].querySelectorAll('li')
    let weapon = []
    for(let weaponLi of weaponLis) {
        weapon.push(weaponLi.textContent);
    }
    //副武器
    let subweaponLis = equipments[2].querySelectorAll('td')[1].querySelectorAll('li')
    let subweapon = []
    for(let subweaponLi of subweaponLis) {
        subweapon.push(subweaponLi.textContent);
    }
    //装备
    let gadgetLis = equipments[3].querySelectorAll('td')[1].querySelectorAll('li')
    let gadget = []
    for(let gadgetLi of gadgetLis) {
        gadget.push(gadgetLi.textContent.replace(/×\d/g,""));
    }
    if(team == '' || team==null) {
        team = troop
    }
    let operator = {
        'name':name,
        'position':position,
        'speed':speed,
        'armor':armor,
        'team':team,
        'troop':troop,
        'weapon':weapon,
        'subweapon':subweapon,
        'gadget':gadget
    }
    resultList.push(operator);
}
console.log(resultList);
