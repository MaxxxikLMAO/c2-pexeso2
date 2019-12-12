let mem_arr = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F'];
let mem_vals = [];
let memory_tile_ids = [];
let mem_tls_flipped = 0;

Array.prototype.mem_shuffle = function() {
    let i = this.length, j, temp;
    while(--i > 0) {
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard() {
    mem_tls_flipped = 0;
    let output = '';
    mem_arr.mem_shuffle();
        for(let i = 0; i < mem_arr.length; i++) {
            output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\'' +mem_arr[i]+'\')"></div>';
        }
        document.getElementById('memory_board').innerHTML = output;
}

function memoryFlipTile(tile,val) {
    if(tile.innerHTML == "" && memory_values.length < 2) {
        tile.style.background = '#FFF';
        tile.innerHTML = val;
        if(memory_values.length == 0) {
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
        } else if(memory_values.length == 1) {
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
            if(memory_values[0] == memory_values[1]) {
                mem_tls_flipped += 2;
                memory_values = [];
                memory_tile_ids = [];
                if(mem_tls_flipped == mem_arr.length) {
                    alert("Vyhrál jsi! jsi absolutní goďák O_O");
                    document.getElementById('memory_board').innerHTML = "";
                    newBoard();
                }
            } else {
                function flip2Back() {
                    let tile_1 = document.getElementById(memory_tile_ids[0]);
                    let tile_2 = document.getElementById(memory_tile_ids[1]);
                    tile_1.style.background = 'url(bg_img.svg) no-repeat';
                    tile_1.innerHTML = "";
                    tile_2.style.background = 'url(bg_img.svg) no-repeat';
                    tile_2.innerHTML = "";

                    memory_values = [];
                    memory_tile_ids = [];
                }
                setTimeout(flip2Back, 1000);
            }
        }
    }
}