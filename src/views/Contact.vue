<template>
        <div class="container">
            <div class="form">
                <input type="text" placeholder="name?">
                <input type="text" placeholder="email?">
                <input type="text" placeholder="phone number?">
                <button>Send</button>
            </div>
            <p> 
                Located at: Viladecans The Style Outlets <br>
                Address: Ctra. de la Vila, 90, 08840 Viladecans, Barcelona <br>
                Telephone: 932 80 79 90
            </p>
        </div>
</template>

<style scoped>
        .container{
            width:50%;
            margin: 0 auto;
            background-color:pink;
        }
        .form{
            width: 60%;
            margin: auto;
        }
        button{
            display: block;
            margin: 2px auto;
            padding: 10px;
            font-size: x-large;
            border-radius: 20%;
            background-color:yellow;
            border: none;
        }
        input{
            display: block;
            margin: 0 auto;
            height: 40px;
            width:100%;
            font-size:x-large;
            border:none;
            margin: 2%;
        }
        h1{
            text-align: center;
        }
        p{
            text-align: center;
            font-size: x-large;
        }

</style>