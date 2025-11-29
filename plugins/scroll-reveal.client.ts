export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        let observer: IntersectionObserver | null = null;
        let mutationObserver: MutationObserver | null = null;

        const initScrollReveal = () => {
            // 清理舊的 observer
            if (observer) {
                observer.disconnect();
            }

            // 創建 Intersection Observer
            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            // 當元素進入視窗時,添加 'revealed' class
                            entry.target.classList.add('revealed');
                        }
                    });
                },
                {
                    threshold: 0.1, // 當 10% 的元素可見時觸發
                    rootMargin: '0px 0px -50px 0px', // 提前 50px 觸發動畫
                }
            );

            // 觀察所有需要滾動顯示的元素
            const revealElements = document.querySelectorAll(
                '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
            );

            revealElements.forEach((el) => {
                // 立即檢查元素是否已經在視窗內
                const rect = el.getBoundingClientRect();
                const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

                if (isInViewport) {
                    // 如果元素已經在視窗內,立即顯示
                    el.classList.add('revealed');
                }

                // 繼續觀察元素,以便處理滾動時的顯示
                observer?.observe(el);
            });

            // 使用 MutationObserver 來監聽 DOM 變化,處理動態添加的元素
            if (mutationObserver) {
                mutationObserver.disconnect();
            }

            mutationObserver = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node instanceof HTMLElement) {
                            // 檢查新添加的節點是否需要滾動顯示效果
                            const needsReveal =
                                node.classList.contains('scroll-reveal') ||
                                node.classList.contains('scroll-reveal-left') ||
                                node.classList.contains('scroll-reveal-right') ||
                                node.classList.contains('scroll-reveal-scale');

                            if (needsReveal) {
                                // 立即檢查是否在視窗內
                                const rect = node.getBoundingClientRect();
                                const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

                                if (isInViewport) {
                                    node.classList.add('revealed');
                                }

                                observer?.observe(node);
                            }

                            // 檢查子元素
                            const childElements = node.querySelectorAll(
                                '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
                            );
                            childElements.forEach((el) => {
                                // 立即檢查是否在視窗內
                                const rect = el.getBoundingClientRect();
                                const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

                                if (isInViewport) {
                                    el.classList.add('revealed');
                                }

                                observer?.observe(el);
                            });
                        }
                    });
                });
            });

            mutationObserver.observe(document.body, {
                childList: true,
                subtree: true,
            });
        };

        // 在頁面加載完成後初始化
        nuxtApp.hook('page:finish', () => {
            setTimeout(() => {
                initScrollReveal();
            }, 100);
        });

        // 在應用掛載後也初始化一次
        nuxtApp.hook('app:mounted', () => {
            setTimeout(() => {
                initScrollReveal();
            }, 100);
        });

        // 確保在 window load 事件後也初始化
        if (typeof window !== 'undefined') {
            if (document.readyState === 'complete') {
                initScrollReveal();
            } else {
                window.addEventListener('load', () => {
                    initScrollReveal();
                });
            }
        }
    }
});
