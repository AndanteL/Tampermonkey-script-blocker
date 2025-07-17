// ==UserScript==
// @name         WeiboBlocker
// @namespace    http://tampermonkey.net/
// @version      2025-07-17
// @description  屏蔽微博首页和搜索页含关键词内容
// @author       AndanteL
// @match        https://weibo.com/*
// @match        https://www.weibo.com/*
// @match        https://s.weibo.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @license      MIT
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 要屏蔽的关键词
    const BLOCK_KEYWORDS = [
        '男','女','父亲','母亲','大龄剩女','男性','女性','coser','儿子','体育生',
        '女儿','迪士尼','盲盒','奶茶','COSER','漫展','小孩','结婚','生娃','华为',
        '大龄女','大妈','单亲','女生','美女','女神','小姐姐','男子','女演员',
        '健身房','JK','身材','985','211'
    ];

    // 微博内容卡片选择器
    const WEIBO_ITEM_SELECTOR = '.wbpro-scroller-item';
    // 微博正文选择器
    const CONTENT_SELECTOR = '.wbpro-feed-content .detail_wbtext_4CRf9';

    // 处理单条微博
    function processWeiboItem(element) {
        const contentElement = element.querySelector(CONTENT_SELECTOR);
        if (contentElement) {
            const text = contentElement.textContent.trim();
            if (BLOCK_KEYWORDS.some(keyword => text.includes(keyword))) {
                element.style.display = 'none';
                console.log(`已屏蔽微博: ${text}`);
            }
        }
    }

    // 处理所有微博
    function processAllWeibo() {
        document.querySelectorAll(WEIBO_ITEM_SELECTOR).forEach(processWeiboItem);
    }

    // 页面加载完成后处理现有微博
    window.addEventListener('load', processAllWeibo);

    // 监听DOM变化，处理动态加载的内容
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.addedNodes.length) {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) {
                        if (node.matches && node.matches(WEIBO_ITEM_SELECTOR)) {
                            processWeiboItem(node);
                        } else if (node.querySelectorAll) {
                            node.querySelectorAll(WEIBO_ITEM_SELECTOR).forEach(processWeiboItem);
                        }
                    }
                });
            }
        });
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
