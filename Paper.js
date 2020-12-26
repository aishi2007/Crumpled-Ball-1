class Paper{
    constructor(x,y){
        var options={
        isStatic:false,
        restitution:0.3,
        friction:5,
        density:1.2
    }
    this.body.circle=(x,y,2,options)
}
}
