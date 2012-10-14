# jBar2

jBar2 is a simple and lightweight jQuery notification banner (an alternative to the Hellobar). It allows you to create a simple call to action and bring it forward for the user to see at the top (or bottom) of your website. The user can then toggle the visibility of the bar by clicking the ribbon.

## Demo

see `index.html`

## Usage

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="js/jquery.jbar2.js"></script>
<link rel="stylesheet" href="css/bar.css">
<script>
$(function() {
	$.jBar.show('message');
});
</script>
```

## Acknowledgements

Code based on [jbar](http://www.toddmotto.com/jbar-plugin-the-jquery-call-to-action-bar)

## TODO

  - implement bottom bar: wrap all bar markup in `<div>` and add class `bottom` to it.
  - support settings (`position`, `color`, `state`, `delay`)
  - implement example with sharing buttons (addthis)
  - implement example showing latest tweets
  - online demo

