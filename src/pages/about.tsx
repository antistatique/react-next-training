import React from 'react';
import tw, { css } from 'twin.macro';

const About = (): JSX.Element => (
  <div tw="relative bg-white">
    <div tw="lg:absolute lg:inset-0">
      <div tw="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
        <img
          tw="object-cover w-full h-56 lg:absolute lg:h-full"
          src="https://cdn.vox-cdn.com/thumbor/AT8nvneOScf7LKMFrC8dnLvTF_w=/312x0:1746x956/1400x788/filters:focal(312x0:1746x956):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/37251612/pokemon-list.0.0.png"
          alt=""
        />
      </div>
    </div>
    <div tw="relative px-4 pt-12 pb-16 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
      <div tw="lg:col-start-2 lg:pl-8">
        <div tw="mx-auto text-base lg:max-w-lg lg:ml-auto lg:mr-0">
          <h2 tw="font-semibold leading-6 tracking-wide text-indigo-600 uppercase">
            Work with us
          </h2>
          <h3 tw="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Our Process
          </h3>
          <p tw="mt-8 text-lg text-gray-500">
            Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
            urna sed consectetur neque tristique pellentesque. Blandit amet, sed
            aenean erat arcu morbi.
          </p>
          <div tw="mt-5  text-gray-500 ">
            <p>
              Sollicitudin tristique eros erat odio sed vitae, consequat turpis
              elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu
              viverra donec ut volutpat donec laoreet quam urna.
            </p>
            <p>
              Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit
              nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et
              sit. Faucibus sed non gravida lectus dignissim imperdiet a.
            </p>
            <p>
              Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem
              arcu, metus, egestas netus cursus. In.
            </p>
            <ul>
              <li>Quis elit egestas venenatis mattis dignissim.</li>
              <li>
                Cras cras lobortis vitae vivamus ultricies facilisis tempus.
              </li>
              <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
            </ul>
            <p>
              Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt
              vel ultricies. Vulputate aliquet velit faucibus semper.
              Pellentesque in venenatis vestibulum consectetur nibh id. In id ut
              tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum
              lacus in. Viverra.
            </p>
            <h3>How we’re different</h3>
            <p>
              Tincidunt integer commodo, cursus etiam aliquam neque, et.
              Consectetur pretium in volutpat, diam. Montes, magna cursus nulla
              feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu
              proin massa, lectus. Diam rutrum posuere donec ultricies non
              morbi. Mi a platea auctor mi.
            </p>
            <p>
              Mauris ullamcorper imperdiet nec egestas mi quis quam ante
              vulputate. Vel faucibus adipiscing lacus, eget. Nunc fermentum id
              tellus donec. Ut metus odio sit sit varius non nunc orci. Eu, mi
              neque, ornare suspendisse amet, nibh. Facilisi volutpat lectus id
              sapien dis mauris rhoncus. Est rhoncus, interdum imperdiet ac
              eros, diam mauris, tortor. Risus id sit molestie magna.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
