{see} = require('lazy-flow')
{list, input, span, div, extendAttrs} = require('domcom')

exports.combobox = combobox = (attrs, modelValue, valueList, direction) ->
  showingItems = see false
  disp = if direction=='v' or direction=='vertical' then 'block' else 'inline-block'
  comp = null # do NOT remove this line, because comp is referenced in attrs
  opts = for item in valueList then do(item=item) -> span({
    style:{display:disp, border:"1px solid blue", "min-width":"40px"}
    onclick:(-> modelValue(item); dc.update())
  }, item)
  attrs = extendAttrs attrs, {
    onmouseleave:(-> showingItems false; dc.update())
  }
  comp = div(attrs,
    input({
      $model:modelValue
      onmouseenter:(-> showingItems true; dc.update())}),
    div({style:{display: -> if showingItems() then 'block' else 'none'}}, opts) #flow showingItems,
  )

exports.vcombo = (attrs, modelValue, valueList) -> combobox(attrs, modelValue, valueList, 'vertical')

exports.hcombo = (attrs, modelValue, valueList) -> combobox(attrs, modelValue, valueList, 'horizontal')
