"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const BOOT_LOGS = [
  "╔═══════════════════════════════════════════════════════════════════════════════╗",
  "║                    QUANTUM NEURAL OPERATING SYSTEM v7.2.1                     ║",
  "║                    COPYRIGHT © 2026 BADASS INDUSTRIES                         ║",
  "║                    ALL RIGHTS RESERVED - CLASSIFIED SYSTEM                    ║",
  "╚═══════════════════════════════════════════════════════════════════════════════╝",
  "",
  "[    0.000000] Initializing Quantum Core Processors...",
  "[    0.000000] QCPU Architecture: 128-Core Quantum Nexus @ 9.2 GHz",
  "[    0.000000] Quantum Entanglement: STABLE | Coherence Time: 47.3ms",
  "[    0.000000] Superposition States: 2^128 (340,282,366,920,938,463,463,374,607,431,768,211,456)",
  "[    0.000000] Quantum Error Correction: ACTIVE | Fidelity: 99.9999%",
  "",
  "[    0.142857] Memory Subsystem Initialization...",
  "[    0.142857] Neural Memory Banks: 2048 GB Quantum RAM (QRAM-9600)",
  "[    0.142857] Total Addressable Space: 18,446,744,073,709,551,616 bytes",
  "",
  "[    0.285714] Graphics Processing Unit Initialization...",
  "[    0.285714] GPU: NVIDIA TITAN NEXUS 9090 Ti - 256GB HBM4 @ 4.5 TB/s",
  "[    0.285714] CUDA Cores: 49,152 | Tensor Cores: 1,536 (Gen 6) | RT Cores: 384",
  "",
  "[    0.428571] Neural Processing Unit Initialization...",
  "[    0.428571] NPU: Custom Neuromorphic Chip 'SYNAPSE-X' - 10 billion artificial neurons",
  "[    0.428571] Synaptic Connections: 100 trillion | Spiking Frequency: 1-1000 Hz",
  "",
  "[    0.571428] Storage Subsystem Initialization...",
  "[    0.571428] Primary: 8x 8TB NVMe Gen 5 in RAID 0",
  "[    0.571428] Encryption: AES-256-XTS + Quantum-Resistant Lattice-Based Crypto",
  "",
  "[    0.714285] Network Interface Initialization...",
  "[    0.714285] NIC 1: Mellanox ConnectX-8 - 800 Gigabit Ethernet",
  "[    0.714285] IPv6 Address: 2001:0db8:85a3:0000:0000:8a2e:0370:7334",
  "[    0.714285] Firewall: Active (47,329 rules loaded) | IDS/IPS: ENABLED",
  "",
  "[    1.000000] Security & Cryptographic Module Initialization...",
  "[    1.000000] TPM 3.0 Detected | Secure Boot: ENABLED | Boot Integrity: VERIFIED",
  "",
  "══════════════════════════════════════════════════════════════════════════════",
  "",
  "HARDWARE INTEGRITY VERIFICATION:",
  "[✓] CPU Microcode: Updated (Revision 0x429F) - No known vulnerabilities",
  "[✓] GPU VBIOS: Version 94.02.3F.00.1A - Signed & Verified",
  "[✓] NPU Firmware: v7.3.2 - Quantum-resistant signature validated",
  "[✓] UEFI/BIOS: Version 2.8.1 Rev A - Secure Boot key verified",
  "",
  "LOADING KERNEL MODULES & SYSTEM SERVICES...",
  "[    1.200000] ├─ Loading: quantum_scheduler.ko .................... [  OK  ] ✓",
  "[    1.234567] ├─ Loading: neural_network_accelerator.ko ........... [  OK  ] ✓",
  "[    1.269134] ├─ Loading: gpu_compute_fabric.ko ................... [  OK  ] ✓",
  "[    1.303701] ├─ Loading: nvme_multipath_aggregate.ko ............. [  OK  ] ✓",
  "[    1.338268] ├─ Loading: firewall_deep_packet_inspection.ko ...... [  OK  ] ✓",
  "[    1.476536] ├─ Loading: holographic_display_manager.ko .......... [  OK  ] ✓",
  "[    1.580237] └─ Loading: reality_augmentation_engine.ko .......... [  OK  ] ✓",
  "",
  "[    1.650000] Total modules loaded: 247 | Failed: 0 | Skipped: 0",
  "",
  "ESTABLISHING NETWORK CONNECTIONS...",
  "[    2.000000] Initializing Quantum-Encrypted Network Stack...",
  "[    2.100000] Connecting to: mainframe.deep.core.quantum.net",
  "[    3.700000] ✓ SECURE CONNECTION ESTABLISHED",
  "",
  "DECRYPTING SYSTEM FILES...",
  "[    4.000000] Scanning encrypted filesystem sectors...",
  "[    4.300000] Initializing Quantum Decryption Engine...",
  "PROGRESS: [████████████████████████████████████████] 100%",
  "DECRYPTION COMPLETE.",
  "",
  "SYSTEM FULLY OPERATIONAL. PREPARING TO LAUNCH...",
];

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [logs, setLogs] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    let isActive = true;

    const interval = setInterval(() => {
      if (!isActive) return;
      
      setLogs((prev) => {
        const newLogs = [...prev, BOOT_LOGS[currentIndex]];
        // Keep only last 50 lines to prevent DOM bloat
        if (newLogs.length > 50) return newLogs.slice(newLogs.length - 50);
        return newLogs;
      });

      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }

      currentIndex++;
      
      if (currentIndex >= BOOT_LOGS.length) {
        clearInterval(interval);
        setTimeout(() => {
          if (isActive) onComplete();
        }, 1000); // Pause before next phase
      }
    }, 50); // Fast typing effect

    return () => {
      isActive = false;
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full p-4 overflow-hidden crt-effect font-mono text-[10px] md:text-sm text-[#00ff41] leading-tight"
    >
      {logs.map((log, i) => (
        <div key={i} className="whitespace-pre-wrap mb-1">{log}</div>
      ))}
      <div className="animate-pulse inline-block w-2 h-4 bg-[#00ff41] ml-1 align-middle" />
    </div>
  );
}
