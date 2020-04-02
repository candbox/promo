# promo
## This is tiny and simple html slide for zepto

Simple zepto muilt-group slide plugin. you can create muilt-group picture and text. 

This javascript example source from candbox shopping cart

# How to use

Use thie full zepto-1.2.js file and add to page.

-----
To refer example file, and create one or more promo group code as follow:

```html
<div class="promo" id="unid-group-name-a">
<div class="box">
<em>Candbox shopping cart official site</em>
<em>Welcome to back here waiting for a moment.</em>
<em>great 2020 let shopping again.</em>
</div>
<div class="tab">
<em class="active"></em><em></em><em></em>
</div>
</div>
<div class="promo" id="unid-group-name-b">
<div class="box">
<em>Candbox shopping cart official site</em>
<em>Welcome to back here waiting for a moment.</em>
<em>great 2020 let shopping again.</em>
</div>
<div class="tab">
<em class="active"></em><em></em><em></em>
</div>
</div>
```

End the page add javascript
```js
<script type="text/javascript"> 
//add display group and keep unique id name
$('#unid-group-name-a').promo(2000,true);
$('#unid-group-name-b').promo(1500,true);
//here you can create more
</script>
```
