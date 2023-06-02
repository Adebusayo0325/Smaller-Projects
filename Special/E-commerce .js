
alert("working")
document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

        //taking value to increment decrement input value
        var valueCount;

        //taking price value in variable
        var price = document.getElementById("price").value;
        console.log(price);

        //price calculation function
        function priceTotal() {
            var total = parseFloat(valueCount) * parseFloat(price);
            document.getElementById("price").value = total
        }

        //plus button
        document.querySelector(".plus-btn").addEventListener("click", function () {
            //getting value of input
       
            if (valueCount === 10){
                document.querySelector(".plus-btn").setAttribute("disabled", "disabled");  }
            else {
                            valueCount = document.getElementById("quantity").value;

            //input value increment by 1
            valueCount++;

            //setting increment input value
         document.getElementById("quantity").value = valueCount;
         
  
            }

            if (valueCount > 1) {
                document.querySelector(".minus-btn").removeAttribute("disabled");
                document.querySelector(".minus-btn").classList.remove("disabled")
            }

            //calling price function
            priceTotal()
        })

        //plus button
        document.querySelector(".minus-btn").addEventListener("click", function () {
            //getting value of input
            valueCount = document.getElementById("quantity").value;

            //input value increment by 1
            valueCount--;

            //setting increment input value
            document.getElementById("quantity").value = valueCount

            if (valueCount == 1) {
                document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
            }

            //calling price function
            priceTotal()
        })