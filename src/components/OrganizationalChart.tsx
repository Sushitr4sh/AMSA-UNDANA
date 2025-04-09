import React from "react";

const OrganizationStructure: React.FC = () => {
  return (
    <div className="mt-24">
      <div className="relative w-full h-screen items-center">
        {/* Legend */}
        <div className="absolute left-1/2 -translate-x-1/2 flex mb-8 gap-8">
          <div className="flex items-center">
            <div className="w-6 border-t-2 bg-white"></div>
            <span className="ml-2 text-white">= Comando Line</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 border-t-2 border-dashed border-white"></div>
            <span className="ml-2 text-white">= Coordination Line</span>
          </div>
        </div>

        {/* First Level */}
        <div className="absolute top-[50px] left-1/2 -translate-x-1/2 flex justify-center">
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 w-48 text-center font-semibold text-white drop-shadow-md">
            MUSYAWARAH BESAR
          </div>
        </div>

        {/* Vertical line */}
        <div className="absolute top-[122px] left-1/2 -translate-x-1/2 border-l-2 border-white h-40 mx-auto" />

        {/* Second Level */}
        <div className="absolute top-[175px] left-1/2 -translate-x-1/2 flex justify-between w-full px-80">
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 w-48 text-center font-semibold text-white drop-shadow-md">
            HMPD UNDANA
          </div>
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 w-48 text-center font-semibold text-white drop-shadow-md">
            AMSA-INDONESIA
          </div>
        </div>

        {/* Connecting line */}
        <div className="absolute top-[222px] left-[416px] border-l-2 border-dashed border-white h-[79px] mx-auto" />
        <div className="absolute top-[300px] left-[416px] border-t-2 border-dashed border-white w-[190px] mx-auto" />
        <div className="absolute top-[222px] right-[416px] border-l-2 border-dashed border-white h-[69px] mx-auto" />
        <div className="absolute top-[290px] right-[416px] border-t-2 border-dashed border-white w-[190px] mx-auto" />

        {/* Two And A Half Level - Advisory Board*/}
        <div className="absolute top-[250px] right-[186px] flex justify-center">
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 w-48 text-center font-semibold text-white drop-shadow-md">
            ADVISORY BOARD
          </div>
        </div>

        {/* Connecting Line */}
        <div className="absolute top-[298px] right-[282px] border-l-2 border-dashed border-white h-[7px] mx-auto" />
        <div className="absolute top-[305px] right-[282px] border-t-2 border-dashed border-white w-[324px] mx-auto" />

        {/* Third Level - Representative */}
        <div className="absolute top-[275px] left-1/2 -translate-x-1/2 flex justify-center">
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 w-48 text-center font-semibold text-white drop-shadow-md">
            REPRESENTATIVE
          </div>
        </div>

        {/* Vertical line */}
        <div className="absolute top-[323px] left-1/2 -translate-x-1/2 border-l-2 border-white h-[280px] mx-auto" />

        {/* Fourth Level */}
        <div className="absolute top-[375px] left-1/2 -translate-x-1/2 flex justify-between w-full px-96">
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 w-48 text-center font-semibold text-white drop-shadow-md">
            VICE REPRESENTATIVE INTERNAL
          </div>
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 w-48 text-center font-semibold text-white drop-shadow-md">
            VICE REPRESENTATIVE EXTERNAL
          </div>
        </div>

        {/* Connecting line */}
        <div className="absolute top-[420px] left-1/2 -translate-x-1/2 border-t-2 border-white w-[240px] mx-auto" />

        {/* Fifth Level */}
        <div className="absolute top-[500px] left-1/2 -translate-x-1/2 flex justify-between w-full px-96">
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 w-48 text-center font-semibold text-white drop-shadow-md">
            GENERAL SECRETARY
          </div>
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 w-48 text-center font-semibold text-white drop-shadow-md">
            TREASURER
          </div>
        </div>

        {/* Connecting line */}
        <div className="absolute top-[525px] left-1/2 -translate-x-1/2 border-t-2 border-white w-[240px] mx-auto" />

        {/* Sixth Level */}
        <div className="absolute top-[600px] left-1/2 -translate-x-1/2 flex justify-between w-full px-24">
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 w-48 text-center font-semibold text-white drop-shadow-md">
            GENERAL SECRETARY
          </div>
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 w-48 text-center font-semibold text-white drop-shadow-md">
            TREASURER
          </div>
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 w-48 text-center font-semibold text-white drop-shadow-md">
            TREASURER
          </div>
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 w-48 text-center font-semibold text-white drop-shadow-md">
            TREASURER
          </div>
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 w-48 text-center font-semibold text-white drop-shadow-md">
            TREASURER
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationStructure;
