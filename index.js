import { h } from 'https://esm.sh/hastscript@8?bundle';
import { toDom } from 'https://esm.sh/hast-util-to-dom@4?bundle';
import { users, issues } from "./data.js";

function intersperse(iterable, separator) {
  return iterable.flatMap(x => [separator, x]).slice(1)
}

function makeUserUrl(user) {
  return `https://salsa.debian.org/${user.username}`;
}

function makeIssueUrl(issue) {
  return `https://salsa.debian.org/debian-brasilia-team/docs/-/issues/${issue.id}`;
}

function renderUserUrl(user) {
  return h('a', { href: makeUserUrl(user) }, user.username);
}

function renderIssue(issue) {
  return h('div.issue', [
    h('p.header', [
      h('a', { href: makeIssueUrl(issue) }, '#' + issue.id),
      h('span.package', issue.package),
      h(`span.status.status-${issue.status}`, issue.status),
    ]),
    h('p.authors', issue.authors.map(renderUserUrl)),
    issue?.comment ?? h('p', issue.comment),
  ]);
}

const $issueList = document.getElementById("issue-list");

console.log(intersperse(issues.map(renderIssue), h('hr')));

function renderIssueList(issues) {
  $issueList.replaceChildren(
    ...intersperse(
      issues.map(renderIssue),
      h('hr')
    ).map(toDom)
  );
}

renderIssueList(issues);
