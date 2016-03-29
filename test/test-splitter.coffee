{expect, iit, idescribe, nit, ndescribe, ddescribe} = require('bdd-test-helper')

{
Component, list, func, if_, each
a, div, p, span, text, select, input
$show, $hide
bindings, duplex
see} = dc

$splitter = require('../splitter')
dc.directives '$splitter', $splitter

describe 'splitter', ->
  it 'should constructor splitter', ->
    #comp = $splitter('vertical')(div({style:{height:'800px', width:'200px'}}, div(1), div(2)))
    comp = (div({$splitter:'vertical', style:{height:'800px', width:'200px'}}, div(1), div(2)))
    comp.mount()
    #comp.node.getBoundingClientRect = -> bottom: 176, height: 0, left: 0, right: 0, top: 176, width: 0
    bounds = comp.node.getBoundingClientRect()
    expect(bounds.width>0).to.equal true
    expect(comp.node.innerHTML).to.match /splitbar/
    children = comp.children
    expect(children[1].node.getBoundingClientRect().top).to.equal comp.node.getBoundingClientRect().top
    children[1].node.onmousedown({type: 'mousedown'})
    comp.node.onmousemove({type: 'mousemove', clientX:20, clientY:30, preventDefault:(->), stopPropagation:(->)})
    expect(children[1].node.getBoundingClientRect().top).to.equal comp.node.getBoundingClientRect().top
    expect(children[1].node.style.top).to.equal '0px'
    comp.node

