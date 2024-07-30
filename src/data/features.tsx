/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: JSX.Element;
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: 'MDX 기반에 의해 구동됩니다',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/undraw_typewriter.svg',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        시간을 절약하고 텍스트 문서에 집중하세요. MDX로 문서와 블로그 게시물을 
        작성하기만 하면 Docusaurus가 이를 정적 HTML 파일로 빌드하여 
        제공할 준비를 합니다. MDX 덕분에 Markdown에 React 컴포넌트를 
        포함시킬 수도 있습니다.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'React를 사용하여 작성되었습니다',
      id: 'homepage.features.built-using-react.title',
    }),
    image: {
      src: '/img/undraw_react.svg',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
        React 컴포넌트를 작성하여 프로젝트의 레이아웃을 확장하고 
        커스터마이징하세요. 플러그인 아키텍처를 활용하고, Docusaurus 
        플러그인이 생성한 동일한 데이터를 재사용하면서 자신만의 
        사이트를 디자인하세요.
      </Translate>
    ),
  },
  {
    title: translate({
      message: '손 쉬운 번역이 가능합니다.',
      id: 'homepage.features.ready-for-translations.title',
    }),
    image: {
      src: '/img/undraw_around_the_world.svg',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
        현지화 기능이 기본으로 제공됩니다. git, Crowdin 또는 다른 번역 
        관리자를 사용하여 문서를 번역하고 개별적으로 배포하세요.
      </Translate>
    ),
  },
  {
    title: translate({
      message: '버전 관리를 지원합니다.',
      id: 'homepage.features.document-versioning.title',
    }),
    image: {
      src: '/img/undraw_version_control.svg',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
        프로젝트의 모든 버전에 대해 사용자를 지원하세요. 문서 버전 관리는 
        프로젝트 릴리스와 문서를 동기화 상태로 유지하는 데 도움이 됩니다.
      </Translate>
    ),
  },
  {
    title: translate({
      message: '컨텐츠 검색을 지원합니다.',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/undraw_algolia.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        커뮤니티가 문서에서 필요한 내용을 쉽게 찾을 수 있게 해주세요. 
        우리는 자랑스럽게 Algolia 문서 검색을 지원합니다.
      </Translate>
    ),
  },
];

export default FEATURES;
