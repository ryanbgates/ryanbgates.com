// ========== BASIC MARQUEE STATUS ==========
// Background marquees run purely on CSS animations
// All headshots are displayed simultaneously - no slideshow needed

function initializeMarquees() {
    const topMarquee = document.querySelector('.marquee-right');
    const bottomMarquee = document.querySelector('.marquee-left');
    
    if (!topMarquee || !bottomMarquee) {
        console.error('❌ Marquees not found!');
        return;
    }
    
    console.log('✅ Marquees initialized successfully');
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Ryan B. Gates Portfolio Loading...');
    
    // Immediately hide body content to prevent flash
    // Using class-based approach so about page isn't affected
    
    // Always add fade in effect for home page
    console.log('🔄 Adding fade in effect for home page load');
    
    // Create fade overlay that starts opaque and fades out
    const fadeOverlay = document.createElement('div');
    fadeOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: #000;
        opacity: 1;
        z-index: 10000;
        transition: opacity 0.6s ease-in;
        pointer-events: none;
    `;
    
    document.body.appendChild(fadeOverlay);
    
    // Remove the loading class to make body visible (but overlay covers it)
    document.body.classList.remove('home-page-loading');
    
    // Fade in the home page after ensuring everything is ready
    setTimeout(() => {
        fadeOverlay.style.opacity = '0';
        setTimeout(() => {
            if (document.body.contains(fadeOverlay)) {
                document.body.removeChild(fadeOverlay);
            }
        }, 600);
    }, 100); // Shorter delay but more reliable
    
    // Force fresh page state - reset any transition classes that might persist
    console.log('🔄 Resetting page to clean state...');
    document.body.classList.remove('page-transition-active', 'parallax-slide-out');
    
    // Ensure marquees are in their original state
    const marquees = document.querySelectorAll('.marquee');
    marquees.forEach(marquee => {
        marquee.style.animation = ''; // Reset any inline animation styles
        marquee.style.transform = ''; // Reset any inline transforms
        marquee.style.opacity = ''; // Reset any inline opacity
    });
    
    // Reset headshot container
    const headshotContainer = document.querySelector('.headshot-container');
    if (headshotContainer) {
        headshotContainer.style.transform = '';
        headshotContainer.style.opacity = '';
    }
    
    // Check that all headshots are loaded
    const headshots = document.querySelectorAll('.headshot');
    console.log(`📸 Found ${headshots.length} headshots`);
    
    // Initialize marquees
    initializeMarquees();
    
    // Note: Navigation now uses device detection instead of preloading
    console.log('🔄 Navigation ready - will detect device type on click...');
    
    // Initialize contact handlers (phone and email)
    initializeContactHandlers();
    
    console.log('✅ Portfolio loaded and ready!');
});

// ========== BROWSER BACK BUTTON HANDLING ==========
// Handle browser back button to ensure fresh page state
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        // Page was restored from browser cache (back button used)
        console.log('🔙 Page restored from cache - forcing fresh state');
        location.reload(); // Force complete page reload for clean state
    }
});

// Also handle visibility change in case page was cached
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        // Page became visible - check if we need to reset
        if (document.body.classList.contains('page-transition-active') || 
            document.body.classList.contains('parallax-slide-out')) {
            console.log('🔄 Detected stale transition state - reloading page');
            location.reload();
        }
    }
});

// ========== PARALLAX PAGE TRANSITION ==========
class ParallaxTransition {
    constructor() {
        this.isTransitioning = false;
        console.log('🎯 ParallaxTransition class initialized');
    }
    
    async transitionToAbout() {
        console.log('🚀 TRANSITION TO ABOUT TRIGGERED');
        
        if (this.isTransitioning) {
            console.log('⚠️ Transition already in progress, ignoring click');
            return;
        }
        
        console.log('✅ Starting transition sequence...');
        this.isTransitioning = true;
        
        console.log('🔒 Adding page-transition-active class to body');
        document.body.classList.add('page-transition-active');
        
        console.log('🎬 Adding parallax-slide-out class for visual transition');
        document.body.classList.add('parallax-slide-out');
        
        console.log('⏱️ Starting 600ms timer before navigation...');
        setTimeout(() => {
            console.log('🔗 Timer complete, using device detection for About page');
            if (isMobileDevice()) {
                console.log('📱 Mobile device detected, loading mobile version');
                window.location.href = 'about/about-mobile.html';
            } else {
                console.log('🖥️ Desktop device detected, loading desktop version');
                window.location.href = 'about/about-desktop.html';
            }
        }, 600);
        
        console.log('🎯 Transition sequence setup complete');
    }
    
    async transitionToWork() {
        console.log('🚀 TRANSITION TO WORK & CREDITS TRIGGERED');
        
        if (this.isTransitioning) {
            console.log('⚠️ Transition already in progress, ignoring click');
            return;
        }
        
        console.log('✅ Starting transition sequence...');
        this.isTransitioning = true;
        
        console.log('🔒 Adding page-transition-active class to body');
        document.body.classList.add('page-transition-active');
        
        console.log('🎬 Adding parallax-slide-out class for visual transition');
        document.body.classList.add('parallax-slide-out');
        
        console.log('⏱️ Starting 600ms timer before navigation...');
        setTimeout(() => {
            console.log('🔗 Timer complete, using device detection for Work page');
            if (isMobileDevice()) {
                console.log('📱 Mobile device detected, loading mobile version');
                window.location.href = 'work/work-mobile.html';
            } else {
                console.log('🖥️ Desktop device detected, loading desktop version');
                window.location.href = 'work/work-desktop.html';
            }
        }, 600); // Same timing as about page transition
        
        console.log('🎯 Transition sequence setup complete');
    }
    
    async transitionToPhotos() {
        console.log('🚀 TRANSITION TO PHOTOS TRIGGERED');
        
        if (this.isTransitioning) {
            console.log('⚠️ Transition already in progress, ignoring click');
            return;
        }
        
        console.log('✅ Starting transition sequence...');
        this.isTransitioning = true;
        
        console.log('🔒 Adding page-transition-active class to body');
        document.body.classList.add('page-transition-active');
        
        console.log('🎬 Adding parallax-slide-out class for visual transition');
        document.body.classList.add('parallax-slide-out');
        
        console.log('⏱️ Starting 600ms timer before navigation...');
        setTimeout(() => {
            console.log('🔗 Timer complete, using device detection for Photos page');
            if (isMobileDevice()) {
                console.log('📱 Mobile device detected, loading mobile version');
                window.location.href = 'photos/photos-mobile.html';
            } else {
                console.log('🖥️ Desktop device detected, loading desktop version');
                window.location.href = 'photos/photos-desktop.html';
            }
        }, 600); // Same timing as other page transitions
        
        console.log('🎯 Transition sequence setup complete');
    }
    
    async transitionToReel() {
        console.log('🚀 TRANSITION TO REEL TRIGGERED');
        
        if (this.isTransitioning) {
            console.log('⚠️ Transition already in progress, ignoring click');
            return;
        }
        
        console.log('✅ Starting transition sequence...');
        this.isTransitioning = true;
        
        console.log('🔒 Adding page-transition-active class to body');
        document.body.classList.add('page-transition-active');
        
        console.log('🎬 Adding parallax-slide-out class for visual transition');
        document.body.classList.add('parallax-slide-out');
        
        console.log('⏱️ Starting 600ms timer before navigation...');
        setTimeout(() => {
            console.log('🔗 Timer complete, using device detection for Reel page');
            if (isMobileDevice()) {
                console.log('📱 Mobile device detected, loading mobile reel version');
                window.location.href = 'reel/reel-mobile.html';
            } else {
                console.log('🖥️ Desktop device detected, loading desktop reel version');
                window.location.href = 'reel/reel-desktop.html';
            }
        }, 600); // Same timing as other page transitions
        
        console.log('🎯 Reel transition sequence setup complete');
    }
}

// Initialize transition manager
console.log('🔧 Creating ParallaxTransition instance...');
const parallaxTransition = new ParallaxTransition();

// Add click handler for About button with detailed logging
document.addEventListener('DOMContentLoaded', () => {
    console.log('🔍 Setting up About button click handler...');
    
    // Wait a moment for all elements to be fully rendered
    setTimeout(() => {
        console.log('🔍 Searching for About button after DOM render...');
        
        // First, let's find ALL possible About buttons
        const allLinks = document.querySelectorAll('a');
        console.log(`🔍 Found ${allLinks.length} total links on page`);
        
        allLinks.forEach((link, index) => {
            const href = link.getAttribute('href') || 'no-href';
            const text = link.textContent.trim();
            console.log(`   Link ${index + 1}: href="${href}" text="${text}"`);
        });
        
        // Try multiple selectors for the About button
        const aboutSelectors = [
            'a[href="#about"]',
            'a:contains("About Ryan")',
            '.nav-link:contains("About")'
        ];
        
        let aboutButton = null;
        let usedSelector = null;
        
        // Try each selector
        for (const selector of aboutSelectors) {
            try {
                if (selector.includes(':contains')) {
                    // Manual search for text content
                    const links = Array.from(document.querySelectorAll('a'));
                    aboutButton = links.find(link => 
                        link.textContent.toLowerCase().includes('about')
                    );
                    if (aboutButton) {
                        usedSelector = 'text-content-search';
                        break;
                    }
                } else {
                    aboutButton = document.querySelector(selector);
                    if (aboutButton) {
                        usedSelector = selector;
                        break;
                    }
                }
            } catch (e) {
                console.log(`⚠️ Selector "${selector}" failed:`, e.message);
            }
        }
        
        console.log('🎯 About button search result:', aboutButton);
        console.log('🔧 Used selector:', usedSelector);
        
        if (aboutButton) {
            console.log('✅ Found About button, adding click handler');
            console.log('📍 About button element:', aboutButton.outerHTML);
            
            // Test if the button is actually clickable
            const rect = aboutButton.getBoundingClientRect();
            console.log('📐 Button position:', {
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
                visible: rect.width > 0 && rect.height > 0
            });
            
            aboutButton.addEventListener('click', (e) => {
                console.log('🖱️ ABOUT BUTTON CLICKED!');
                console.log('🚫 Preventing default link behavior');
                e.preventDefault();
                e.stopPropagation();
                
                console.log('🎬 Calling parallaxTransition.transitionToAbout()');
                parallaxTransition.transitionToAbout();
            });
            
            // Also add mouseenter/mouseleave for hover debugging
            aboutButton.addEventListener('mouseenter', () => {
                console.log('🖱️ Mouse entered About button');
            });
            
            aboutButton.addEventListener('mouseleave', () => {
                console.log('🖱️ Mouse left About button');
            });
            
            console.log('✅ About button click handler successfully attached');
            
            // ========== WORK & CREDITS BUTTON HANDLER ==========
            console.log('🔍 Setting up Work & Credits button click handler...');
            const workButton = document.querySelector('a[href="work.html"]');
            
            if (workButton) {
                console.log('✅ Found Work & Credits button, adding click handler');
                
                workButton.addEventListener('click', (e) => {
                    console.log('🖱️ WORK & CREDITS BUTTON CLICKED!');
                    e.preventDefault();
                    e.stopPropagation();
                    parallaxTransition.transitionToWork();
                });
                
                console.log('✅ Work & Credits button click handler successfully attached');
            } else {
                console.error('❌ Work & Credits button not found!');
            }
            
            // ========== PHOTOS BUTTON HANDLER ==========
            console.log('🔍 Setting up Photos button click handler...');
            const photosButton = document.querySelector('a[href="#photos"]');
            
            if (photosButton) {
                console.log('✅ Found Photos button, adding click handler');
                console.log('📍 Photos button element:', photosButton.outerHTML);
                
                photosButton.addEventListener('click', (e) => {
                    console.log('🖱️ PHOTOS BUTTON CLICKED!');
                    console.log('🚫 Preventing default link behavior');
                    e.preventDefault();
                    e.stopPropagation();
                    
                    console.log('🎬 Calling parallaxTransition.transitionToPhotos()');
                    parallaxTransition.transitionToPhotos();
                });
                
                console.log('✅ Photos button click handler successfully attached');
            } else {
                console.error('❌ Photos button not found!');
            }
            
            // ========== REEL BUTTON HANDLER ==========
            console.log('🔍 Setting up Reel button click handler...');
            const reelButton = document.querySelector('a[href="#reel"]');
            
            if (reelButton) {
                console.log('✅ Found Reel button, adding click handler');
                console.log('📍 Reel button element:', reelButton.outerHTML);
                
                reelButton.addEventListener('click', (e) => {
                    console.log('🖱️ REEL BUTTON CLICKED!');
                    console.log('🚫 Preventing default link behavior');
                    e.preventDefault();
                    e.stopPropagation();
                    
                    console.log('🎬 Calling parallaxTransition.transitionToReel()');
                    parallaxTransition.transitionToReel();
                });
                
                console.log('✅ Reel button click handler successfully attached');
            } else {
                console.error('❌ Reel button not found!');
            }
            
        } else {
            console.error('❌ About button not found with any selector!');
            
            // Last resort: attach to all nav links
            const navLinks = document.querySelectorAll('.nav-link');
            console.log(`� Attaching to all ${navLinks.length} nav links as fallback...`);
            
            navLinks.forEach((link, index) => {
                link.addEventListener('click', (e) => {
                    const text = link.textContent.trim();
                    console.log(`�️ Nav link ${index + 1} clicked: "${text}"`);
                    
                    if (text.toLowerCase().includes('about')) {
                        console.log('🎯 This appears to be the About link!');
                        e.preventDefault();
                        parallaxTransition.transitionToAbout();
                    } else if (text.toLowerCase().includes('work') && text.toLowerCase().includes('credits')) {
                        console.log('🎯 This appears to be the Work & Credits link!');
                        e.preventDefault();
                        parallaxTransition.transitionToWork();
                    }
                });
            });
        }
    }, 100); // Wait 100ms for DOM to settle
});

// ========== DEVICE DETECTION AND NAVIGATION ==========
function isMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'blackberry', 'webos'];
    const isMobileUserAgent = mobileKeywords.some(keyword => userAgent.includes(keyword));
    const isSmallScreen = window.innerWidth <= 768;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    return isMobileUserAgent || (isSmallScreen && isTouchDevice);
}

function navigateToAbout() {
    console.log('🧭 Navigating to About page with parallax transition...');
    
    // Trigger parallax animation first, then navigate
    if (typeof parallaxTransition !== 'undefined') {
        parallaxTransition.transitionToAbout();
    } else {
        console.error('❌ ParallaxTransition not available, direct navigation');
        if (isMobileDevice()) {
            console.log('📱 Mobile device detected, loading mobile version');
            window.location.href = 'about/about-mobile.html';
        } else {
            console.log('🖥️ Desktop device detected, loading desktop version');
            window.location.href = 'about/about-desktop.html';
        }
    }
}

function navigateToWork() {
    console.log('🧭 Navigating to Work & Credits page with parallax transition...');
    
    // Trigger parallax animation first, then navigate
    if (typeof parallaxTransition !== 'undefined') {
        parallaxTransition.transitionToWork();
    } else {
        console.error('❌ ParallaxTransition not available, direct navigation');
        if (isMobileDevice()) {
            console.log('📱 Mobile device detected, loading mobile version');
            window.location.href = 'work/work-mobile.html';
        } else {
            console.log('🖥️ Desktop device detected, loading desktop version');
            window.location.href = 'work/work-desktop.html';
        }
    }
}

function navigateToPhotos() {
    console.log('🧭 Navigating to Photos page with parallax transition...');
    
    // Trigger parallax animation first, then navigate
    if (typeof parallaxTransition !== 'undefined') {
        parallaxTransition.transitionToPhotos();
    } else {
        console.error('❌ ParallaxTransition not available, direct navigation');
        if (isMobileDevice()) {
            console.log('📱 Mobile device detected, loading mobile version');
            window.location.href = 'photos/photos-mobile.html';
        } else {
            console.log('🖥️ Desktop device detected, loading desktop version');
            window.location.href = 'photos/photos-desktop.html';
        }
    }
}

function navigateToReel() {
    console.log('🧭 Navigating to Reel page with parallax transition...');
    
    // Trigger parallax animation first, then navigate
    if (typeof parallaxTransition !== 'undefined') {
        parallaxTransition.transitionToReel();
    } else {
        console.error('❌ ParallaxTransition not available, direct navigation');
        if (isMobileDevice()) {
            console.log('📱 Mobile device detected, loading mobile reel version');
            window.location.href = 'reel/reel-mobile.html';
        } else {
            console.log('🖥️ Desktop device detected, loading desktop reel version');
            window.location.href = 'reel/reel-desktop.html';
        }
    }
}

// ========== CONTACT CARD FUNCTIONALITY ==========
function toggleContactCard(event) {
    console.log('📞 Contact toggle triggered');
    
    // Prevent default link behavior
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    const contactCard = document.querySelector('.contact-card');
    const headshotContainer = document.querySelector('.headshot-container');
    
    if (!contactCard || !headshotContainer) {
        console.error('❌ Contact card or headshot container not found!');
        return;
    }
    
    const isContactVisible = contactCard.classList.contains('show');
    
    if (isContactVisible) {
        // Hide contact card, show headshot container
        console.log('📞 Hiding contact card, showing headshot container');
        contactCard.classList.remove('show');
        headshotContainer.style.display = 'flex';
    } else {
        // Show contact card, hide headshot container
        console.log('📞 Showing contact card, hiding headshot container');
        contactCard.classList.add('show');
        headshotContainer.style.display = 'none';
    }
}

// ========== PHONE NUMBER HANDLING ==========
function handlePhoneClick(event, phoneNumber) {
    console.log('📱 Phone number clicked:', phoneNumber);
    
    if (isMobileDevice()) {
        // On mobile: allow default tel: link behavior for direct calling
        console.log('📱 Mobile device - initiating direct call');
        return true; // Allow default behavior
    } else {
        // On desktop: copy to clipboard
        event.preventDefault();
        event.stopPropagation();
        
        console.log('🖥️ Desktop device - copying to clipboard');
        
        // Copy to clipboard
        navigator.clipboard.writeText(phoneNumber).then(() => {
            console.log('✅ Phone number copied to clipboard');
            showCopyConfirmation(phoneNumber);
        }).catch(err => {
            console.error('❌ Failed to copy to clipboard:', err);
            // Fallback for older browsers
            fallbackCopyToClipboard(phoneNumber);
        });
        
        return false;
    }
}

// ========== EMAIL HANDLING ==========
function handleEmailClick(event, emailAddress) {
    console.log('📧 Email address clicked:', emailAddress);
    
    if (isMobileDevice()) {
        // On mobile: allow default mailto: link behavior
        console.log('📱 Mobile device - opening email app');
        return true; // Allow default behavior
    } else {
        // On desktop: copy to clipboard
        event.preventDefault();
        event.stopPropagation();
        
        console.log('🖥️ Desktop device - copying email to clipboard');
        
        // Copy to clipboard
        navigator.clipboard.writeText(emailAddress).then(() => {
            console.log('✅ Email address copied to clipboard');
            showCopyConfirmation(emailAddress);
        }).catch(err => {
            console.error('❌ Failed to copy email to clipboard:', err);
            // Fallback for older browsers
            fallbackCopyToClipboard(emailAddress);
        });
        
        return false;
    }
}

// Fallback copy method for older browsers
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            console.log('✅ Phone number copied using fallback method');
            showCopyConfirmation(text);
        } else {
            console.error('❌ Fallback copy failed');
        }
    } catch (err) {
        console.error('❌ Fallback copy error:', err);
    }
    
    document.body.removeChild(textArea);
}

// Show confirmation when number is copied
function showCopyConfirmation(phoneNumber) {
    // Create or find existing notification
    let notification = document.querySelector('.copy-notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-family: Georgia, serif;
            font-size: 14px;
            z-index: 10001;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            pointer-events: none;
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        `;
        document.body.appendChild(notification);
    }
    
    notification.textContent = `📋 Copied: ${phoneNumber}`;
    notification.style.opacity = '1';
    
    // Hide after 2 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
    }, 2000);
}

// Initialize phone number and email click handlers
function initializeContactHandlers() {
    console.log('📞 Initializing contact handlers...');
    
    // Phone number handlers
    const phoneLinks = document.querySelectorAll('.phone-link');
    console.log(`📞 Found ${phoneLinks.length} phone links`);
    
    phoneLinks.forEach((link, index) => {
        const phoneNumber = link.getAttribute('data-phone');
        console.log(`📞 Setting up handler for phone ${index + 1}: ${phoneNumber}`);
        
        link.addEventListener('click', (event) => {
            handlePhoneClick(event, phoneNumber);
        });
    });
    
    // Email handlers
    const emailLinks = document.querySelectorAll('.email-link');
    console.log(`📧 Found ${emailLinks.length} email links`);
    
    emailLinks.forEach((link, index) => {
        const emailAddress = link.getAttribute('data-email');
        console.log(`📧 Setting up handler for email ${index + 1}: ${emailAddress}`);
        
        link.addEventListener('click', (event) => {
            handleEmailClick(event, emailAddress);
        });
    });
    
    console.log('✅ Contact handlers initialized');
}

// ========== RESUME DOWNLOAD FUNCTIONALITY ==========
function downloadResume(event) {
    console.log('📄 Resume download triggered');
    
    // Prevent default link behavior
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    // Path to the resume file - using the actual resume filename
    const resumePath = 'Ryan B. Gates Actor Resume.pdf';
    
    // Check if the file exists by attempting to fetch it
    fetch(resumePath, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                // File exists, proceed with download
                console.log('✅ Resume file found, initiating download');
                
                // Create a temporary anchor element to trigger download
                const link = document.createElement('a');
                link.href = resumePath;
                link.download = 'Ryan-B-Gates-Resume.pdf'; // Suggested filename for download
                link.style.display = 'none';
                
                // Add to DOM, click, and remove
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Show success notification
                showDownloadNotification('Resume download started!', 'success');
                
            } else {
                console.error('❌ Resume file not found at:', resumePath);
                showDownloadNotification('Resume file not available', 'error');
            }
        })
        .catch(error => {
            console.error('❌ Error checking resume file:', error);
            
            // Fallback: try to download anyway in case it's a CORS issue
            console.log('🔄 Attempting download anyway...');
            const link = document.createElement('a');
            link.href = resumePath;
            link.download = 'Ryan-B-Gates-Resume.pdf';
            link.style.display = 'none';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            showDownloadNotification('Download attempted - please check your downloads folder', 'info');
        });
}

// Show download notification
function showDownloadNotification(message, type = 'info') {
    // Create or find existing notification
    let notification = document.querySelector('.download-notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'download-notification';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            font-family: Georgia, serif;
            font-size: 14px;
            z-index: 10001;
            opacity: 0;
            transition: all 0.3s ease-in-out;
            pointer-events: none;
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            max-width: 300px;
            word-wrap: break-word;
        `;
        document.body.appendChild(notification);
    }
    
    // Set color based on type
    let borderColor = 'rgba(255, 255, 255, 0.2)';
    let icon = '📄';
    
    switch (type) {
        case 'success':
            borderColor = 'rgba(0, 255, 0, 0.3)';
            icon = '✅';
            break;
        case 'error':
            borderColor = 'rgba(255, 0, 0, 0.3)';
            icon = '❌';
            break;
        case 'info':
            borderColor = 'rgba(255, 215, 0, 0.3)';
            icon = 'ℹ️';
            break;
    }
    
    notification.style.borderColor = borderColor;
    notification.textContent = `${icon} ${message}`;
    notification.style.opacity = '1';
    notification.style.transform = 'translateX(0)';
    
    // Hide after 4 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
    }, 4000);
}