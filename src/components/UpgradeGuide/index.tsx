/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {
  useLatestVersion,
  useActiveDocContext,
  useVersions,
} from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Translate from '@docusaurus/Translate';
import Admonition from '@theme/Admonition';
import CodeBlock from '@theme/CodeBlock';

const docsPluginId = undefined; // Default docs plugin instance

function PackageJson() {
  const latestVersion = useLatestVersion(docsPluginId);
  const allVersions = useVersions(docsPluginId);
  // Only happens in deploy preview / local dev, but still nice
  const versionName =
    latestVersion.name === 'current' && allVersions.length > 1
      ? allVersions[1]!.name
      : latestVersion.name;
  return (
    <CodeBlock language="json" title="package.json">{`{
  "dependencies": {
    "@docusaurus/core": "${versionName}",
    "@docusaurus/preset-classic": "${versionName}",
    // ...
  }
}`}</CodeBlock>
  );
}

function VersionNotice() {
  const latestVersion = useLatestVersion(docsPluginId);
  const activeVersion = useActiveDocContext(docsPluginId).activeVersion!;
  const isBrowser = useIsBrowser();
  // It's possible that the user is browsing a snapshot version
  // which is only detectable once we are in the browser
  if (isBrowser) {
    const location = window.location.hostname;
    if (
      location.includes('netlify.app') &&
      !location.includes('deploy-preview')
    ) {
      return (
        <Admonition type="caution">
          <p>
            <Translate
              id="upgradeGuide.archivedVersion.notice"
              values={{
                mainSiteLink: (
                  <Link href="https://docusaurus.io/docs/installation">
                    <Translate id="upgradeGuide.archivedVersion.notice.mainSiteLink.label">
                      메인 사이트
                    </Translate>
                  </Link>
                ),
              }}>
              {
                '아카이브된 버전을 탐색 중이며 아래 스니펫은 오래되었습니다. {mainSiteLink}로 이동하여 최신 버전으로 업그레이드하는 방법을 따르세요.'
              }
            </Translate>
          </p>
        </Admonition>
      );
    }
  }
  if (activeVersion.name === 'current') {
    return (
      <Admonition type="info">
        <p>
          <Translate
            id="upgradeGuide.unreleasedVersion.notice"
            values={{
              canaryDocLink: (
                <Link href="/community/canary">
                  <Translate
                    id="upgradeGuide.unreleasedVersion.notice.canaryDocLink.label"
                    // eslint-disable-next-line @docusaurus/no-untranslated-text
                    values={{canaryTag: <code>@canary</code>}}>
                    {'{canaryTag} 릴리스'}
                  </Translate>
                </Link>
              ),
            }}>
            {
              '출시되지 않은 버전의 문서를 탐색 중입니다. 출시되지 않은 기능을 사용하려면 {canaryDocLink}를 사용할 수 있습니다.'
            }
          </Translate>
        </p>
      </Admonition>
    );
  }
  if (activeVersion.name !== latestVersion.name) {
    return (
      <Admonition type="caution">
        <p>
          <Translate id="upgradeGuide.outdatedVersion.notice">
            오래된 버전의 문서를 탐색 중입니다. 아래 스니펫은 최신 버전으로 
            업그레이드하는 방법을 보여줍니다.
          </Translate>
        </p>
      </Admonition>
    );
  }
  return null;
}

export default function UpgradeGuide(): JSX.Element {
  return (
    <>
      <VersionNotice />
      <PackageJson />
    </>
  );
}
