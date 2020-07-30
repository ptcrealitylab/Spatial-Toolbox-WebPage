const headings = document.body.querySelectorAll('h1,h2');

const sidebar = document.createElement('aside');
sidebar.classList.add('menu', 'menu-sidebar-101');

const list = document.createElement('ul');
list.classList.add('menu-list', 'menu-list-101');

const links = [];

for (const heading of headings) {
  if (heading.classList.contains('sidebar-ignore')) {
    continue;
  }
  const elt = document.createElement('li');
  const link = document.createElement('a');
  link.href = '#' + heading.id;
  link.textContent = heading.textContent;
  link.classList.add('menu-link-101');
  elt.appendChild(link);
  list.appendChild(elt);

  links.push({
    link,
    heading,
  });
}

sidebar.appendChild(list);
const sidebarContainer = document.getElementById('sidebar-container');
sidebarContainer.appendChild(sidebar);

function onHeaderIntersection(entries) {
  let entry = entries[0];
  let linkI;
  for (linkI = 0; linkI < links.length; linkI++) {
    if (links[linkI].heading === entry.target) {
      break;
    }
  }
  if (linkI >= links.length) {
    console.warn('Unable to find corresponding link');
    return;
  }

  sidebar.querySelectorAll('.is-active').forEach(elt => {
    elt.classList.remove('is-active');
  });

  // At top of page
  if (entry.boundingClientRect.y < 0) {
    links[linkI].link.classList.add('is-active');
  } else {
    let prevLinkI = Math.max(0, linkI - 1);
    links[prevLinkI].link.classList.add('is-active');
  }
}

if (typeof IntersectionObserver !== 'undefined') {
  let observer = new IntersectionObserver(onHeaderIntersection, {threshold: 1.0});
  for (let link of links) {
    observer.observe(link.heading);
  }
}
