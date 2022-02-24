_changed = () => {
    var img_value = document.getElementById('img_selector').value;
    var myimg = document.getElementById('img');
    switch (img_value) {
        case '1':
            myimg.src = "../Data/yae_miko_1.jpg" // choose your picture, use relative path
            break;
        case '2':
            myimg.src = "../Data/yae_miko_2.jpg"
            break;
        case '3':
            myimg.src = "../Data/yae_miko_3.jpg"
            break;
        case '4':
            myimg.src = "../Data/yae_miko_4.jpg"
            break;
        case '5':
            myimg.src = "../Data/yae_miko_5.jpg"
            break;
    }
}
