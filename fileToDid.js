/* This just helps me upload assets to the canister by transforming images into a base64 string and mapping the image file name onto the correct card index. Should work with most image formats. */
import fs from 'fs';

const path = process.argv[2];
const map = {"c01": 22,"c02": 23,"c03": 24,"c04": 25,"c05": 26,"c06": 27,"c07": 28,"c08": 29,"c09": 30,"c10": 31,"c11": 32,"c12": 33,"c13": 34,"c14": 35,"m00": 0,"m01": 1,"m02": 2,"m03": 3,"m04": 4,"m05": 5,"m06": 6,"m07": 7,"m08": 8,"m09": 9,"m10": 10,"m11": 11,"m12": 12,"m13": 13,"m14": 14,"m15": 15,"m16": 16,"m17": 17,"m18": 18,"m19": 19,"m20": 20,"m21": 21,"p01": 64,"p02": 65,"p03": 66,"p04": 67,"p05": 68,"p06": 69,"p07": 70,"p08": 71,"p09": 72,"p10": 73,"p11": 74,"p12": 75,"p13": 76,"p14": 77,"s01": 36,"s02": 37,"s03": 38,"s04": 39,"s05": 40,"s06": 41,"s07": 42,"s08": 43,"s09": 44,"s10": 45,"s11": 46,"s12": 47,"s13": 48,"s14": 49,"w01": 50,"w02": 51,"w03": 52,"w04": 53,"w05": 54,"w06": 55,"w07": 56,"w08": 57,"w09": 58,"w10": 59,"w11": 60,"w12": 61,"w13": 62,"w14": 63,};
fs.readFile(path, (err, resp) => {
    const match = path.match(/[a-z][0-9][0-9]/);
    if (!match) return;
    const i = match[0];
    const did = `(${map[i]}, "data:image/${path.split('.').slice(-1)[0]};base64,${resp.toString('base64')}")`;
    console.log(did);
});
