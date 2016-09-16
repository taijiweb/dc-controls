###* @module accordion
 * @directive accordion
###

extend = require('extend')
{each, div, h4, a, span, img, extendAttrs, Component} = require('domcom')

module.exports = exports = accordion = (attrs, accordionGroupList, options) ->
  attrs = extendAttrs {class:"panel-group"}, attrs  || {}
  accordionOptions = options || {}
  comp = div(attrs, each(accordionGroupList, (group, index) ->
      [groupAttrs, heading, content, groupOptions] = group
      groupOptions = groupOptions || {}
      groupOptions.toggleOpen = ->
        groupOptions.opened = !groupOptions.opened
        if accordionOptions.closeOthers && groupOptions.opened
          for group2, i in accordionGroupList
            if i!=index then group2[3].opened = false
        comp.render()
      accordionGroup(groupAttrs, heading, content, groupOptions)
    )
  )

exports.accordionGroup = accordionGroup = (attrs, heading, content, options) ->
  div({class:"panel panel-default"},
    div({class:"panel-heading", onclick: options.toggleOpen},
      h4({class:"panel-title"}
          div({class:"accordion-toggle"}, span({class:{'text-muted': -> options.disabled}}, heading))
      )
    )
    div({
        class:{"panel-collapse": -> !options.opened}
        style:{ display: -> if options.opened then 'block' else 'none'}},
      div({class:"panel-body"}, content)
    )
  )

exports.accordion = accordion