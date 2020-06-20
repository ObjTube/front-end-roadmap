import React, { useEffect } from 'react';
import { fabric } from 'fabric'
import { useHistory } from "react-router-dom";
import { roadmap, makeLine, makeSubLine, makeTextSquare, CARD_CONFIG } from './roadmap'
function Index() {
    const history = useHistory()
    useEffect(() => {
        var canvas = new fabric.Canvas('c', { containerClass: 'roadmap-canvas', selection: false, interactive: false, hoverCursor: 'pointer' });
        const arr = []
        const lines = []
        let lastP
        roadmap.forEach((parent) => {
            const p = makeTextSquare(parent.x, parent.y, parent.text, 1, parent.w, parent.h)
            p.link = parent.link
            arr.push(p)
            if (lastP) {
                lines.push(makeLine(lastP, p))
            }
            lastP = p
            if (parent.children) {
                const left = parent.children[0]
                const right = parent.children[1] || []

                left.forEach((child, index) => {
                    const length = left.length
                    const isEven = length % 2 === 0
                    let childY = child.y || (parent.y - (Math.floor(length / 2) - index) * (CARD_CONFIG.height + CARD_CONFIG.subCardMargin))
                    childY += isEven ? CARD_CONFIG.height / 2 : 0
                    const c = makeTextSquare(child.x, childY, child.text, 2, child.w, child.h)
                    arr.push(c)

                    const l = makeSubLine(c, p)
                    lines.push(l)
                    if (child.children) {
                        child.children.forEach((cchild, ccindex) => {
                            const length = child.children.length
                            const isEven = length % 2 === 0
                            let childY = c.top - (Math.floor(length / 2) - ccindex) * (CARD_CONFIG.height + CARD_CONFIG.subCardMargin)
                            childY += isEven ? CARD_CONFIG.height / 2 : 0
                            const cc = makeTextSquare(cchild.x, childY, cchild.text, 3, cchild.w, cchild.h)
                            arr.push(cc)

                            const l = makeSubLine(cc, c)
                            lines.push(l)
                        })
                    }

                })
                right.forEach((child, index) => {
                    const length = right.length
                    const isEven = right.length % 2 === 0
                    let childY = child.y || (parent.y - (Math.floor(length / 2) - index) * (CARD_CONFIG.height + CARD_CONFIG.subCardMargin))
                    childY += isEven ? CARD_CONFIG.height / 2 : 0
                    const c = makeTextSquare(child.x, childY, child.text, 2, child.w, child.h)
                    arr.push(c)
                    const l = makeSubLine(p, c)
                    lines.push(l)
                    if (child.children) {
                        child.children.forEach((cchild, ccindex) => {
                            const length = child.children.length
                            const isEven = length % 2 === 0
                            let childY = c.top - (Math.floor(length / 2) - ccindex) * (CARD_CONFIG.height + CARD_CONFIG.subCardMargin)
                            childY += isEven ? CARD_CONFIG.height / 2 : 0
                            const cc = makeTextSquare(cchild.x, childY, cchild.text, 3, cchild.w, cchild.h)
                            arr.push(cc)
                            const l = makeSubLine(c, cc)
                            lines.push(l)
                        })
                    }
                })
            }
        })
        arr.map(item => canvas.add(item))
        lines.map(item => canvas.add(item))

        canvas.on('mouse:down', (options) => {
            if (options.target && options.target.link) {
                history.push(`/guide${options.target.link}`)
            }
        })

    }, [])

    return (
        <div className="roadmap-container">
            <div className="roadmap">
                <canvas id="c" height="5000px" width="1000px"></canvas>
            </div>
        </div>
    );
}

export default Index;
