<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site Responsivo</title>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
    
    <link rel="stylesheet" href="estilos/telas-grandes.css" media="screen and (min-width:768px)">
    <link rel="stylesheet" href="estilos/style.css">
   
</head>
<body>
    <header>
        <h1>Meu Site</h1>
        <span id="burguer" class="material-symbols-outlined" onclick="clickMenu()">Menu</span>
       <menu id="itens">
            <ul>
                <li><a href="">Opção 1</a></li>
                <li><a href="">Opção 2</a></li>
                <li><a href="">Opção 3</a></li>
                <li><a href="">Opção 4</a></li>
                <li><a href="">Opção 5</a></li>
            </ul>
       </menu>
    </header>
    <main>
        <article>
            <h2>Testando Media Queries</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere illum incidunt! Tempore enim alias sequi ratione aspernatur ea illo commodi. Veniam atque omnis iste perspiciatis distinctio maxime quam temporibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum voluptatem consectetur ab maiores itaque corrupti, aperiam earum asperiores, dolores odio harum aspernatur ipsam sapiente hic officiis voluptas aliquam rerum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere illum incidunt! Tempore enim alias sequi ratione aspernatur ea illo commodi. Veniam atque omnis iste perspiciatis distinctio maxime quam temporibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum voluptatem consectetur ab maiores itaque corrupti, aperiam earum asperiores, dolores odio harum aspernatur ipsam sapiente hic officiis voluptas aliquam rerum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere illum incidunt! Tempore enim alias sequi ratione aspernatur ea illo commodi. Veniam atque omnis iste perspiciatis distinctio maxime quam temporibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum voluptatem consectetur ab maiores itaque corrupti, aperiam earum asperiores, dolores odio harum aspernatur ipsam sapiente hic officiis voluptas aliquam rerum.</p>
        </article>
    </main>

    <script>
        function clickMenu() {
            if(itens.style.diplay == 'block') {
                itens.style.display = 'none'
            } else {
                itens.style.display = 'block'
            }
        }
    </script>
</body>
</html>