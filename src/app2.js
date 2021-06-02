import './app2.css'
import $ from 'jquery'

const $TabBar = $("#app2 .tab-bar")
const $TabContent = $("#app2 .tab-content")

$TabBar.on("click", "li", (e)=>{
    const $li = $(e.currentTarget)
    $li
        .addClass("selected")
        .siblings().removeClass("selected")
    const index = $li.index()
    $TabContent
        .children().eq(index)
        .addClass("active")
        .siblings().removeClass("active")
})

