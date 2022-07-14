<template>
        <div class="container">
            <div class="form">
                <div class="form_section">
                    <img src="../../public/Logos/email.png" alt="">
                    <input type="text" placeholder="Cual es tu correo?">
                </div>
                <div class="form_section">
                    <img src="../../public/Logos/llamada-telefonica.png" alt="">
                    <input type="" placeholder="teléfono?">
                </div>
                <div class="form_section">
                    <img src="../../public/Logos/usuario.png" alt="">
                    <input type="" placeholder="Nombre usuario?">
                </div>
                <div class="form_section">
                    <textarea   placeholder="Escribe tu mensaje"></textarea>  
                </div>
                <button>Send</button>
            </div>
            <p> 
                Located at: Viladecans The Style Outlets <br>
                Address: Ctra. de la Vila, 90, 08840 Viladecans, Barcelona <br>
                Telephone: 932 80 79 90
            </p>
        </div>
</template>

<script type="module">
        export default {
            data(){
                    return {

                    }
            }
        }
</script>


<style scoped>
        .container{
            width:50%;
            margin: 0 auto;
            /* background-color:pink; */
        }
        .form{
            width: 60%;
            margin: auto;
        }
        .form_section{
            display: block;
            position: relative;
            width: 100%;
        }
        img{
            position: absolute;
            top: 10px;
            left: 20px;
            width: 20px;
            height: 20px;
        }
        input{
            display: block;
            margin: 0 auto;
            height: 40px;
            width:90%;
            border: none;
            color:none;
            font-size:x-large;
            margin: 2%;
        }
        input:focus{
            outline: none;
            /* border-right: 1px solid transparent;
            border-top: 1px solid transparent;
            border-left: 1px solid transparent; */
            border-bottom: 4px solid rgb(240, 112, 112);
        }
        input[placeholder]{
            padding-left: 10%;
        }
        textarea{
            display: block;
            margin: 0 auto;
            height: 40px;
            width:100%;
            height: 140px;
            border-radius: 20px;
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