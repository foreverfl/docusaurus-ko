/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';
import Heading from '@theme/Heading';

const Playgrounds = [
  {
    name: '📦 CodeSandbox',
    image: require('@site/static/img/playgrounds/codesandbox.png'),
    url: 'https://docusaurus.new/codesandbox',
    urlTS: 'https://docusaurus.new/codesandbox-ts',
    description: (
      <Translate id="playground.codesandbox.description">
        CodeSandbox는 온라인 코드 에디터이자 개발 환경으로, 개발자들이 웹
        브라우저 상에서 웹 개발 프로젝트를 만들고, 공유하고, 협업할 수 있게
        해주는 플랫폼입니다.
      </Translate>
    ),
  },
  {
    name: '⚡ StackBlitz 🆕',
    image: require('@site/static/img/playgrounds/stackblitz.png'),
    url: 'https://docusaurus.new/stackblitz',
    urlTS: 'https://docusaurus.new/stackblitz-ts',
    description: (
      <Translate
        id="playground.stackblitz.description"
        values={{
          webContainersLink: (
            <Link href="https://blog.stackblitz.com/posts/introducing-webcontainers/">
              WebContainers
            </Link>
          ),
        }}>
        {
          'StackBlitz uses a novel {webContainersLink} technology to run Docusaurus directly in your browser.'
        }
      </Translate>
    ),
  },
];

interface Props {
  name: string;
  image: string;
  url: string;
  urlTS: string;
  description: JSX.Element;
}

function PlaygroundCard({name, image, url, urlTS, description}: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className={clsx('card__image')}>
          <Link to={url}>
            <Image img={image} alt={`${name}'s image`} />
          </Link>
        </div>
        <div className="card__body">
          <Heading as="h3">{name}</Heading>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div style={{textAlign: 'center'}}>
            <b>
              <Translate id="playground.tryItButton">
                지금 사용해보세요!
              </Translate>
            </b>
          </div>
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url}>
              JavaScript
            </Link>
            <Link className="button button--secondary" to={urlTS}>
              TypeScript
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlaygroundCardsRow(): JSX.Element {
  return (
    <div className="row">
      {Playgrounds.map((playground) => (
        <PlaygroundCard key={playground.name} {...playground} />
      ))}
    </div>
  );
}
