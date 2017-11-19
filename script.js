
var vm = new Vue({
el: "#app",
data: {
   argB:"",
   argC:"",
   discr:"",
    errorMessage:""
},
    methods:{
    recount: function(){
    var discr = this.argB*this.argB-4*this.argC;
    var D = discr;
    var x1,x2;
    if(D<0)
    {
    this.errorMessage="нет решений!";
        console.log(this.errorMessage);
}
                 else if(D==0)
            {
                x1=x2=-this.argB/2;
                console.log(x1);
            }
                else
                    {
                        x1=(-this.argB-Math.sqrt(D))/2;
                        x2=(-this.argB+Math.sqrt(D))
                        console.log(x1);
                        console.log(x2);
                    }
}
}
   
});