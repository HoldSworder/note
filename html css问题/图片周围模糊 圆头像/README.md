利用box-shadow的内阴影效果实现

    .cover {
        border-radius: 50%;
        width: 180px;
        height: 180px;
        overflow: hidden;

        position:relative;
    }
    .cover:after{
    position:absolute;
    content:'';
    width:100%;
    height:100%;
    top:0;
    left:0;
    border-radius:50%;
    box-shadow:0 0 30px 10px rgba(255,255,255,.7) inset;
    }

`box-shadow inset`内阴影效果