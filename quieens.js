/*
1- board ve queen veri yapısını tanımla.
2- board üzerinde queen'leri yerleştirmek için bir fonksiyon yaz.
3- board üzerinde queen'lerin birbirini tehdit edip etmediğini kontrol eden bir fonksiyon yaz.
4- board üzerinde queen'leri yerleştirmek için bir algoritma yaz (örneğin backtracking).
5- board üzerinde queen'leri yerleştirdikten sonra sonucu ekrana yazdıran bir fonksiyon yaz.
*/

const rows = 8;
const cols = 8;

const board = Array.from({ length: rows }, () => Array(cols).fill(0));
const queens = [
  { id: 1, position: null },
  { id: 2, position: null },
  { id: 3, position: null },
  { id: 4, position: null },
  { id: 5, position: null },
  { id: 6, position: null },
  { id: 7, position: null },
  { id: 8, position: null },
];

const placeQueens = function () {
  for (let i = 0; i < 8; i++) {
    board[i][0] = queens[i].id;
  }
};

placeQueens();


const checkThread = function() {
    for (let i = 0; i < 8; i++) {
       


    }
}