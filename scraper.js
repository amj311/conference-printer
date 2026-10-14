    let talks = await(async () => {
        const navs = Array.from(document.querySelectorAll('[class*="subItems"] [class*="subItems"] a'));

        const talks = [];

        for (const nav of navs) {
            const title = nav.querySelector('span').innerText;
            const author = nav.querySelector('[class*="subtitle"]').innerText;

            nav.click();

            await new Promise(res => setTimeout(res, 1500));


            const kicker = document.querySelector('.kicker')?.innerText;
            const authorRole = document.querySelector('.author-role')?.innerText;

            const bodySections = [];

            function resolveUrl(url) {
                if (!url) return undefined;
                return url.startsWith('/') ? (location.origin + url) : url;
            }


            function extractTextNodes(parentEl) {
            
                return Array.from(parentEl.childNodes).map(n => {
                    // els.add(n.nodeName);
                    if (n.nodeName === '#text') {
                        return {
                            type: 'text',
                            text: n.data,
                        }
                    }

                    if (n.classList?.contains('note-ref')) {
                        const sup = n.querySelector('sup');
                        return {
                            type: 'note',
                            noteNumber: sup.dataset.value,
                        }
                    }
                    return {
                        type: 'element',
                        nodeName: n.nodeName,
                        innerText: n.innerText,
                        href: resolveUrl(n.getAttribute('href')),
                    }
                });
            }

            function extractImage(sectionEl) {
                const image = sectionEl.querySelector('[class*="imageWrapper"] img');
                const credit = sectionEl.querySelector('credit p');
                if (image) {
                    console.log("IMAGE DIV", sectionEl);
                    bodySections.push({
                        type: 'image',
                        noPrint: sectionEl.classList.contains('no-print') || Boolean(sectionEl.querySelector('.no-print')),
                        alt: image.getAttribute('alt'),
                        src: resolveUrl(image.getAttribute('src')),
                        credit: credit ? {
                            nodes: extractTextNodes(credit)
                        } : null,
                    })
                }
            }

            function extractSections(parentEl) {
                for (const sectionChild of parentEl.children) {
                    // simple <p>
                    if (sectionChild.nodeName === 'P') {
                        bodySections.push({
                            type: 'paragraph',
                            nodes: extractTextNodes(sectionChild),
                        });
                    }
                    else if (sectionChild.nodeName === 'HEADER') {
                        const header = sectionChild.querySelector('h2') || sectionChild.querySelector('h3');
                        if (!header) {
                            console.error("unsupported header", sectionChild);
                        }
                        bodySections.push({
                            type: 'section-header',
                            level: header.nodeName,
                            nodes: extractTextNodes(header),
                        });
                    }
                    else if (sectionChild.nodeName === 'FIGURE') {
                        console.log("IMAGE FIGURE", sectionChild)
                        extractImage(sectionChild);
                    }
                    else if (sectionChild.nodeName === 'DIV') {
                        const image = sectionChild.querySelector('[class*="imageWrapper"]');
                        if (image) {
                            console.log("IMAGE DIV", sectionChild)
                            extractImage(sectionChild);
                        }
                        
                        else if (sectionChild.classList.contains('poetry')) {
                            bodySections.push({
                                type: 'poetry',
                                stanzas: Array.from(sectionChild.children).map(stanzaEl => {
                                    if (!stanzaEl.classList?.contains('stanza')) {
                                        console.error("unknown poetry child", stanzaEl, sectionChild);
                                    }
                                    // stanzas are blocks of p lines
                                    return Array.from(stanzaEl.children).map(lineEl => {
                                        if (!lineEl.classList?.contains('line')) {
                                            console.error("unknown poetry child", lineEl, sectionChild);
                                        }
                                        return {
                                            nodes: extractTextNodes(lineEl),
                                        }
                                    });
                                })
                            })
                        }
                        else {
                            console.log("unknown DIV child", sectionChild);
                        }
                    }

                    
                    else if (sectionChild.nodeName === 'OL') {
                        bodySections.push({
                            type: 'ol',
                            items: Array.from(sectionChild.querySelectorAll('li p')).map(liP => ({
                                nodes: extractTextNodes(liP),
                            }))
                        });
                    }
                    
                    else if (sectionChild.nodeName === 'UL') {
                        bodySections.push({
                            type: 'ul',
                            items: Array.from(sectionChild.querySelectorAll('li p')).map(liP => ({
                                nodes: extractTextNodes(liP),
                            }))
                        });
                    }

                    else if (sectionChild.nodeName === 'SECTION') {
                        extractSections(sectionChild);
                    }
                    else {
                        console.error(sectionChild);
                        throw new Error('Unsupported child type ' + sectionChild.nodeName);
                    }
                }
                    
            
            }

            extractSections(document.querySelector('.body-block'));

            const notes = Array.from(document.querySelectorAll('.notes ol li')).map(li => ({
                noteNumber: Number(li.id?.replace('note', '')),
                text: Array.from(li.querySelector('p').childNodes).reduce((text, node) => {
                    return text + (node.innerText || node.data);
                }, ''),
            }));


            talks.push({
                title,
                author,
                authorRole,
                kicker,
                bodySections,
                notes
            })
        }

        return talks;
    })();

    console.log(talks)